require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const compoundRoutes = require("./routes/compound.routes");

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


/* ✅ BASIC MIDDLEWARE */
app.use(express.json());

/* ✅ ROOT TEST */
app.get("/", (req, res) => {
  res.status(200).send("API OK");
});

/* ✅ API ROUTES */
app.use("/api/compounds", compoundRoutes);

/* ❌ NO OTHER app.use BELOW THIS */

/* ✅ DB CHECK */
sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
