const express = require("express");
const router = express.Router();

const controller = require("../controllers/compound.controller");
const {
  validateCompoundCreate,
  validateCompoundUpdate,
} = require("../validators/compound.validator");

// READ
router.get("/", controller.getCompounds);
router.get("/:id", controller.getCompoundById);

// CREATE
router.post("/", validateCompoundCreate, controller.createCompound);

// UPDATE
router.put("/:id", validateCompoundUpdate, controller.updateCompound);

// DELETE
router.delete("/:id", controller.deleteCompound);

module.exports = router;
