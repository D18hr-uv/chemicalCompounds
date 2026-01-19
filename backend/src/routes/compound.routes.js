const express = require("express");
const router = express.Router();
const controller = require("../controllers/compound.controller");

router.get("/", controller.getCompounds);
router.get("/:id", controller.getCompoundById);
router.put("/:id", controller.updateCompound);

module.exports = router;
