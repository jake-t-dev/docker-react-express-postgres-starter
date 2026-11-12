import express from "express";
import db from "./db.js";
const app = express();

app.get('/data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM test'); // will fail because theres no tables in the db
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
