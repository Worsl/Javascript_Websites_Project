const notesContainer = document.getElementById("app");
const addNoteButton = document.querySelector(".add-note");
addNoteButton.addEventListener("click", addNote);


getNotes().forEach( note=>{
    const noteElement = createNoteElement(note.id,note.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
})

function getNotes(){
    //retrieve notes from local storage
    //return array of notes
    //JSON.parse converts JSON string to javascript object
    return JSON.parse(localStorage.getItem("stickynotes-notes" ) || "[]");
}

function saveNotes(notes){
    //save notes array to local storage in a JSON string
    //literally rewrites the entire local storage
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}


function createNoteElement(id, content){
    //creates a new HTML element (text area) that represents a new note
    const element = document.createElement("textarea");

    element.classList.add("note"); //adding the CSS style
    element.value = content; //setting the content of the textarea
    element.placeholder = "Empty Sticky Note"; 

    element.addEventListener("change",function(){
        updateNote(id,element.value);
    });

    element.addEventListener("dblclick",function(){
        const doDelete = confirm("Are you sure you want to delete this note?");
        if (doDelete) {
            deleteNote(id,element);}
    });
    return element;

}


function addNote(){
    //first get an existing reference to the notes array
    const currentNotes = getNotes();
    //add a new note to the notes array
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    //create the HTML element
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
    
    //resave the array
    currentNotes.push(noteObject);
    saveNotes(currentNotes);


}

function updateNote(id, newContent){
    console.log("updating note...");
    console.log(id, newContent);
    const currentNotes = getNotes();
    const targetNote = currentNotes.filter(note => note.id === id)[0];

    targetNote.content = newContent;
    saveNotes(currentNotes);

}

function deleteNote(id, element){
    console.log("deleting note...");
    console.log(id,element);

    //the node to remove is exluced from the notes array
    const currentNotes = getNotes().filter(note => note.id!== id);
    saveNotes(currentNotes);
    notesContainer.removeChild(element);
    

}