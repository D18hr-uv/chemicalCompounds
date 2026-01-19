require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const compoundRoutes = require("./routes/compound.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/compounds", compoundRoutes);

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB Error:", err));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
