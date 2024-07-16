const notes = require('express').Router();
const uuid = require('../db');

const { readFromFile, readAndAppend } = require('../db');

notes.get('/', (req, res) => {
  console.info(`${req.method} post notes`);
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
  console.info(`${req.method} write post notes`);

  const { id, title, text } = req.body;

  if (req.body) {
    const notes = {
      id: uuid(),
      title,
      text,
    };

    readAndAppend(newNotes, '../db/notes.json');
    res.json(`Added`);
  } else {
    res.error('Error');
  }
});

module.exports = tips;
