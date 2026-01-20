require("dotenv").config();

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const sequelize = require("../src/config/database");
const Compound = require("../src/models/compound.model");

const csvPath = path.join(__dirname, "../compounds.csv");

(async () => {
  try {
    await sequelize.authenticate();
    console.log(" DB connected (Seeder)");

    await sequelize.sync({ force: true });

    const compounds = [];

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (row) => {
        compounds.push({
          name: row.CompoundName,
          image: row.strImageSource,
          description: row.CompoundDescription,
        });
      })
      .on("end", async () => {
        await Compound.bulkCreate(compounds);
        console.log(` CSV data imported: ${compounds.length} records`);
        process.exit(0);
      });
  } catch (err) {
    console.error(" Seeder failed:", err);
    process.exit(1);
  }
})();
