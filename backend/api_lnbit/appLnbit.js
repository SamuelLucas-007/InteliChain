// Requires
const cors = require('cors');
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutesLnbit');

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const port = process.env.PORT || 3033;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});