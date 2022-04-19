const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'B#nTuck#r1989',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  // FIND > ALL CANDIDATES
  //db.query(`SELECT * FROM candidates`, (err, rows) => {
    //console.log(rows);
  //});

  // FIND > SPECIFIC CANDIDATE
 // db.query(`SELECT * FROM candidates WHERE id = 1`, (err, rows) => {
   // console.log(rows);
  //});

// DELETE A CANDIDATE
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err,result) => {
  //  if(err) {
    //    console.log(err);
    //}
    //console.log(result);
//});

// CREATE A CANDIDATE
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;
 
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});