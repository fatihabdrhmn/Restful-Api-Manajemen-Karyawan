const jwt = require("jsonwebtoken");

const SECRET_KEY = "sybau";


exports.generateToken = (admin) => {
  return jwt.sign(
    { id_admin: admin.id_admin, username: admin.username },
    SECRET_KEY,
    { expiresIn: "2h" }
  );
};


exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token tidak valid atau expired" });
    req.user = user;
    next();
  });
};
