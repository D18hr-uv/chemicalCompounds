exports.validateCompound = (req, res, next) => {
  const { name, image, description } = req.body;
  if (!name || !image || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
