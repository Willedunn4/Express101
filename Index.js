const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('How ya doin today?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

<script ;src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js">'hello'</script>

<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

var firebaseConfig = {
    apiKey: "AIzaSyBXrcFQbCo_BdB9-00f-rtANP8Dn4kb2AI",
    authDomain: "express101-b7b06.firebaseapp.com",
    projectId: "express101-b7b06",
    storageBucket: "express101-b7b06.appspot.com",
    messagingSenderId: "1087259336197",
    appId: "1:1087259336197:web:b946b9d945a9a3cfd8066c",
    measurementId: "G-XWM2JFZ9SB"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  noteForm.addEventListener('submit', (e)=>{
    addNote(e);
});

  function addNote(e){
    e.preventDefault();
    

    let newNote = {};

    let title = document.querySelector('.title');
    let note = document.querySelector('.note');

    if(title.value == '' || note.value ==''){
        return alert('Please enter both fields');
    }else{
        newNote.title = title.value
        newNote.note = note.value
    }
    
    title.value = '';
    note.value = '';

    noteList.push(newNote);
    appendNotes();
    cancel.click();

}
function appendNotes(){
  let notes = Array.from(document.querySelectorAll('.noteItem'));
  if(notes.length > 0){
      notes.forEach(note =>{
          note.remove();
      })
  }

  noteList.map(note =>{
      // Create table cells
      let tr = document.createElement('tr');
      tr.classList = 'noteItem';
      let tdTitle = document.createElement('td');
      tdTitle.innerText = note.title;
      let tdNote = document.createElement('td');
      tdNote.innerText = note.note;
      let tdDelete = document.createElement('td');
      tdDelete.innerHTML = '&times';
      tdDelete.classList.add('delete-item');

      // Append cells to table row
      tr.appendChild(tdTitle);
      tr.appendChild(tdNote);
      tr.appendChild(tdDelete);

      // Append row to table

      noteTable.appendChild(tr);
      getDeleteButtons();
      localStorage.setItem('notes',JSON.stringify(noteList));
  })
}
  