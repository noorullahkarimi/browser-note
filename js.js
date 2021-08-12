//-----------------------------variable------------------------------------
let listDiv = document.querySelector(".listDiv");
//---------------------------------eventListener---------------------------
eventListener();
//all event 
function eventListener() {
    //form submission
    document.querySelector('#form').addEventListener('submit', newNote);
    //click on <div .listdiv>
    document.querySelector('.listDiv').addEventListener('click', removeNote);
    // when loaded browser-tab it can take quantit from localStorage
    document.addEventListener('DOMContentLoaded', loadFromLs);
}
//------------------------------------------function------------------------

//adding new note to the list 
function newNote(e) {
    e.preventDefault();//because submit don't work a default action 
    //get access to value of the <textarea>
    const note = document.querySelector('#comment').value;

    //create <div .removeBtn> tag (remove btn)
    const removeBtn = document.createElement('div');
    removeBtn.classList = 'removeBtn';
    removeBtn.textContent = 'X';

    //create <div .contentBtn> tag 
    const contentBtn = document.createElement('div')
    contentBtn.classList = 'contentBtn';
    contentBtn.textContent = note;

    //create <div .li> tag
    const li = document.createElement('div');
    li.classList = 'li';

    //adding all tags to the <div .li>
    li.appendChild(contentBtn);
    li.appendChild(removeBtn);

    //adding to the list comments
    listDiv.appendChild(li);

    this.reset();//reset and make empty textarea
    addToLS(note);
    alert('your note saved!');
}
//remove note from list of comments
function removeNote(e) {
    if (e.target.classList.contains = 'removeBtn') {
        e.target.parentElement.remove();
    }
    //get text content from parent element of button
    let noteContent=e.target.parentElement.textContent;
    removeFromLS(noteContent);
}
//get note from loclastorage
function getNOteLs() {
    let notes;
    let localContent = localStorage.getItem('notes');//get local storage quantity
    if (localContent == null) {
        notes = [];
    } else {
        notes = JSON.parse(localContent);//convert value to the array 
        console.log(notes);
    }
    return notes;
}
//add to local storage browser
function addToLS(note) {
    let notes = getNOteLs();
    notes.push(note);//push a new quantity to the array with push 
    //change value to stringify and put it to local storage
    localStorage.setItem('notes', JSON.stringify(notes));
}
function loadFromLs() {
    //get all things from localstorage
    let notes = getNOteLs();
    notes.forEach(function (notes) {
        //create <div .removeBtn> tag (remove btn)
        const removeBtn = document.createElement('div');
        removeBtn.classList = 'removeBtn';
        removeBtn.textContent = 'X';

        //create <div .contentBtn> tag 
        const contentBtn = document.createElement('div')
        contentBtn.classList = 'contentBtn';
        contentBtn.textContent = notes;

        //create <div .li> tag
        const li = document.createElement('div');
        li.classList = 'li';

        //adding all tags to the <div .li>
        li.appendChild(contentBtn);
        li.appendChild(removeBtn);

        //adding to the list comments
        listDiv.appendChild(li);
    });
}
function removeFromLS(noteContents){
    let deleteNote= noteContents.substring(0,noteContents.length-1);
    let LS= getNOteLs();
    LS.forEach(function(note,index){
      if(note==deleteNote)  {
        LS.splice(index,1);
      }
    });
    localStorage.setItem('notes',JSON.stringify(LS));
}


// ----->notice --> this output in client most be like below html and you can
//see the test on the html page 
//     <div class="li">
//     <div class="contentBtn">some text are here 
//     <div class="removeBtn">X</div>
// </div>
// <div class="li">
//     <div class="contentBtn">some text are here 
//     <div class="removeBtn">X</div>
// </div>
