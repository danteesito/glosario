const express = require('express');
const app = express();
const path = require('path');
const glossaryRouter = require('./routes/glossary');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/glossary', glossaryRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
