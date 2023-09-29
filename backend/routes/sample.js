const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const user = { name, email, password: hashedPassword };
  connection.query('INSERT INTO users SET ?', user, (error, results) => {
    if (error) throw error;
    res.send('User registered successfully!');
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  connection.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.send('Login successful!');
        } else {
          res.status(401).send('Incorrect password!');
        }
      });
    } else {
      res.status(404).send('User not found!');
    }
  });
});

app.listen(3000, () => console.log('Server started on port 3000!'));
