const express = require('express');
const app = express();

app.get('/h', (req, res) => {
  res.json([{ isim: "oguzhan", skor: 3 }]);
});

app.get('/veri', (req, res) => {
  res.json([{ isim: "oguzhan", skor: 3 }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sunucu çalışıyor: ${port}`));
