import express, { json } from 'express';

const app = express();
app.use(json());

app.post('/test', async (_req, res) => {
  try {
    res.send();
  } catch (error) {
    console.log(error);
    res.status().send(error);
  }
});

const PORT = 6309;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
