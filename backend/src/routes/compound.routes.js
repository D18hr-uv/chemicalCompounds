const express = require("express");
const router = express.Router();

const {
  getCompounds,
  getCompoundById,
  createCompound,
  updateCompound,
  deleteCompound,
} = require("../controllers/compound.controller");

const {
  validateCompoundCreate,
  validateCompoundUpdate,
} = require("../validators/compound.validator");

/* READ (Paginated) */
router.get("/", getCompounds);

/* READ (Single) */
router.get("/:id", getCompoundById);

/* CREATE */
router.post("/",validateCompoundCreate, createCompound);

/* UPDATE */
router.put("/:id",validateCompoundUpdate, updateCompound);

/* DELETE */
router.delete("/:id", deleteCompound);

module.exports = router;
