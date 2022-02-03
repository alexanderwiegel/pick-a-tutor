const db = require("../db/db");
require("../db/associations");

async function run() {
  // Recreate tables
  await db.sync();
}

run().then(() => console.log("Database tables were recreated"));
