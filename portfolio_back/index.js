const express = require("express");
var cors = require('cors')
const PORT = 8000;

// initializing express
const app = express();
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send("Salut !")
})


app.listen(PORT, () => console.log(`Server Runing On ${PORT}`));