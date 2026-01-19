const Compound = require("../models/Compound");

// GET PAGINATED COMPOUNDS
exports.getCompounds = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const { rows, count } = await Compound.findAndCountAll({
    limit,
    offset,
  });

  res.json({
    data: rows,
    total: count,
    page,
    totalPages: Math.ceil(count / limit),
  });
};

// GET SINGLE COMPOUND
exports.getCompoundById = async (req, res) => {
  const compound = await Compound.findByPk(req.params.id);
  if (!compound) return res.status(404).json({ message: "Not found" });
  res.json(compound);
};

// UPDATE COMPOUND
exports.updateCompound = async (req, res) => {
  const { name, image, description } = req.body;

  await Compound.update(
    { name, image, description },
    { where: { id: req.params.id } }
  );

  res.json({ message: "Compound updated successfully" });
};
