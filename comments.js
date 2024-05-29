// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Import comments
const comments = require('./comments');
// Add comments to the server
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});