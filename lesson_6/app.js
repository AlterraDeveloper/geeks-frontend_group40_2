// var let const

const appContainer = document.getElementById("app");
const addNoteButton = document.querySelector("#btn");

addNoteButton.addEventListener("click", function () {
  const note = {
    id: new Date().getMilliseconds().toString(),
    content: "",
  };
  addNote(note);
  renderNote(note);
});

/* <textarea
    cols="30"
    rows="10"
    class="note"
    placeholder="Empty Note"
></textarea> */
function buildNoteElement(note) {
  const textarea = document.createElement("textarea");
  textarea.className = "note";
  textarea.placeholder = "Empty Note";
  textarea.cols = "30";
  textarea.rows = "10";
  textarea.id = note.id;
  textarea.value = note.content;

  return textarea;
}

function renderNote(note) {
  const noteElement = buildNoteElement(note);
  appContainer.insertBefore(noteElement, addNoteButton);

  noteElement.addEventListener("dblclick", function () {
    const userAgree = confirm("Do you want remove note?");
    if (userAgree) {
      noteElement.remove();
      removeNote(noteElement.id);
    }
  });

  noteElement.addEventListener("input", function () {
    const noteContent = noteElement.value;
    editNote(noteElement.id, noteContent);
  });
}

const localStorageKey = "note-app";

function getNotes() {
  const notesJson = localStorage.getItem(localStorageKey);
  const notes = JSON.parse(notesJson ?? "[]");
  return notes;
}

function saveNotes(notes) {
  const notesJson = JSON.stringify(notes);
  localStorage.setItem(localStorageKey, notesJson);
}

function addNote(newNote) {
  const notes = getNotes();
  notes.push(newNote);
  saveNotes(notes);
}

function removeNote(noteId) {
  const notes = getNotes();
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  notes.splice(noteIndex, 1);
  saveNotes(notes);
}

function editNote(noteId, content) {
  const notes = getNotes();
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  notes[noteIndex].content = content;
  saveNotes(notes);
}

const notes = getNotes();
for (const note of notes) {
  renderNote(note);
}

// JSON -JavaScript Object Notation
