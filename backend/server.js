const express = require('express');
const fs = require('fs');
const app = express();


app.use((req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFileSync('access.log', logMessage);  
  next();
});

app.get('/api/access-logs', (req, res) => {
  fs.readFile('access.log', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error reading access logs' });
    }
    res.send({ logs: data });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
