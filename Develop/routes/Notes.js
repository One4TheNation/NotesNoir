const fb = require('express').Router();

const uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

fb.get('/', (req, res) => {
  console.info(`${req.method} request new notes`);

  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

fb.post('/', (req, res) => {
  console.info(`${req.method} new notes`);

  const { noteTitle, noteText} = req.body;

  if (noteTitle && noteText) {
    const newNotes = {
      note_id: uuid(),
      noteTitle,
      noteText,
    };

    readAndAppend(newPost, './db/post.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = fb;
