// middleware/isAdmin.js
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Απαγορεύεται: Μόνο για Admin.' });
  }
};

export default isAdmin;
