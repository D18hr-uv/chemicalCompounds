const Compound = require("../models/Compound");

// POST COMPOUND (Create)
exports.createCompound = async (req, res) => {
  try {
    const { name, image, description } = req.body;

    const compound = await Compound.create({
      name,
      image,
      description,
    });

    res.status(201).json({
      message: "Compound created successfully",
      compound,
    });
  } catch (err) {
    console.error("Create compound error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// GET PAGINATED COMPOUNDS(Read)
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

// UPDATE COMPOUND (Update)
exports.updateCompound = async (req, res) => {
  const { name, image, description } = req.body;

  const compound = await Compound.findByPk(req.params.id);
  if (!compound) {
    return res.status(404).json({ message: "Compound not found" });
  }

  compound.name = name;
  compound.image = image;
  compound.description = description;

  await compound.save();

  res.status(200).json({
    message: "Compound updated successfully",
    compound,
  });
};

// DELETE COMPOUND (Delete)
exports.deleteCompound = async (req, res) => {
  try {
    const compound = await Compound.findByPk(req.params.id);

    if (!compound) {
      return res.status(404).json({ message: "Compound not found" });
    }

    await compound.destroy();

    res.status(200).json({
      message: "Compound deleted successfully",
    });
  } catch (err) {
    console.error("Delete compound error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

