exports.validateCompoundCreate = (req, res, next) => {
  const { name, image, description } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Invalid name" });
  }

  if (!image || !image.startsWith("http")) {
    return res.status(400).json({ message: "Invalid image URL" });
  }

  if (!description || description.length < 10) {
    return res.status(400).json({ message: "Invalid description" });
  }

  next();
};

exports.validateCompoundUpdate = (req, res, next) => {
  const { name, image, description } = req.body;

  if (name && typeof name !== "string") {
    return res.status(400).json({ message: "Invalid name" });
  }

  if (image && !image.startsWith("http")) {
    return res.status(400).json({ message: "Invalid image URL" });
  }

  if (description && description.length < 10) {
    return res.status(400).json({ message: "Invalid description" });
  }

  next();
};
