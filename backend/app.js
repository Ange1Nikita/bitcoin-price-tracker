const express = require('express');
const cors = require('cors');
const priceRoutes = require('./routes/priceRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', priceRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});