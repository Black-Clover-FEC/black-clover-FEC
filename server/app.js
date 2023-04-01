require('dotenv').config();
const express = require('express')
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express()
const port = process.env.PORT || 3000;
const clientDir = path.join(__dirname, '../client/dist')
const clientHtml = path.join(clientDir, '/index.html')

app.use(express.static(clientDir))

app.get('/*', (req, res) => {
  res.status(200);
  res.sendFile(clientHtml);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})