const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(express.json());
app.use(require('./routes/user.routes'));
app.use(require('./routes/twit.routes'));
app.use(require('./routes/comment.routes'));

mongoose
  .connect(
    "mongodb+srv://intocode:Ma16pagava@cluster0.cajlu.mongodb.net/students?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });