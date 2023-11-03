// Requires
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutesAlby');

const port = process.env.PORT || 3334;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});