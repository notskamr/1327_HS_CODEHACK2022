window.onload = function () {
    
  const notesContainer = document.getElementById("app");
  const addNoteButton = notesContainer.querySelector(".add-note");
  const deleteNoteButton = document.querySelector(".delete-btn");
  getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
  });
  
  addNoteButton.addEventListener("click", () => addNote());

  function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  }
  
  function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
  }
  
  function createNoteElement(id, content) {
    const element = document.createElement("textarea");
  
    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Sticky Note";
    const items = ["#FDDFDF", "#FCF7DE", "#DEFDE0", "#DEF3FD", "#F0DEFD"]
  element.style.backgroundColor = items[items.length * Math.random() | 0]
  
    element.addEventListener("change", () => {
      updateNote(id, element.value);
    });


    element.addEventListener("contextmenu", (e) => {
      deleteNote(id, element)
      e.preventDefault();
    });
    deleteNoteButton.addEventListener("click", () => deleteNote(id, element) )

    return element;
  }
  
  function addNote() {
    const notes = getNotes();
    const noteObject = {
      id: Math.floor(Math.random() * 100000),
      content: ""
    };
  
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
  
    notes.push(noteObject);
    saveNotes(notes);
  }
  
  function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id == id)[0];
  
    targetNote.content = newContent;
    saveNotes(notes);
  }
  
  function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
  
    saveNotes(notes);
    notesContainer.removeChild(element);
  }
  
  }
