const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

// 导出为 Vercel 所需的 handler
module.exports = app;
