import express from 'express';

// create app
const app = express();

// to make app understand json
app.use(express.json());

let artistList = [
  {
    id: 1,
    name: 'Sujan Chapagain',
    age: 25,
  },

  { id: 2, name: 'G-bob Nepali', age: 21 },
];

// request => post, put,get,delete
// response => status code

app.get('/artist/list', (req, res) => {
  res.status(200).send({ message: 'success', artists: artistList });
});

// add artist
app.post('/artist/add', (req, res) => {
  const artist = req.body;

  artistList.push(artist);

  res.status(201).send({ message: 'Artist is added successfully.' });
});

// port
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
