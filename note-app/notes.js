const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  "Your Notes...";
};

// Adding a Note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Note Added!"));
  } else {
    console.log(chalk.bgRed("Note Title taken"));
  }
};

// Remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const keepNotes = notes.filter((note) => note.title !== title);

  if (notes.length > keepNotes.length) {
    saveNotes(keepNotes);
    console.log(chalk.bgGreen('note with title "' + title + '" removed'));
  } else {
    console.log(chalk.bgRed('No note has the title "' + title + '"'));
  }
};

// Helper Functions

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
