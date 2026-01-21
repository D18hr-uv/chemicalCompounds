require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const compoundRoutes = require("./routes/compound.routes");

const app = express();

/* CORS */
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* BODY PARSER */
app.use(express.json());

/* ROOT TEST */
app.get("/", (req, res) => {
  res.status(200).send("API OK");
});

/* API ROUTES */
app.use("/api/compounds", compoundRoutes);

/* DATABASE */
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync();
  })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("DB error:", err));

/* SERVER */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
