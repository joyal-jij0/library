const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read= read;
}

function addBookToLibrary(){
    const dialog = document.getElementById("Dialog");
    const form = document.getElementById('bookForm');
    form.addEventListener('submit',function (event){
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author= document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const radioButton = document.getElementsByName('read');
        let read;
        for(const buttons of radioButton){
            if(buttons.checked){
                read = buttons.value;
            }
        }

        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        form.reset()
        dialog.close();

        display(myLibrary);

    })

}


function display(myLibrary){
    const container = document.querySelector(".container");
    container.innerHTML = '';
    for(let i = 0; i<myLibrary.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                          <div>
                            <h1>${myLibrary[i].title}</h1>
                            <h2>by ${myLibrary[i].author}</h2>
                            <h3>${myLibrary[i].pages} pages</h3>
                          </div>
                          <div>
                            <button class="close">&times;</button>
                          </div>
                          <div class="toggle">
                            <h3>${myLibrary[i].read}</h3>
                            <button class = "toggle-read">Toggle Read</button>
                          </div>`;

        container.appendChild(card);
        const toggleButton = card.querySelector(".toggle-read");
        toggleButton.addEventListener("click", () =>{
            if(myLibrary[i].read === "Not Read yet"){
                myLibrary[i].read = "Read";
            }
            else{
                myLibrary[i].read = "Not Read yet";
            }
            display(myLibrary);
        })


        const closeButton = card.querySelector(".close");
        closeButton.addEventListener("click", () => {
            container.removeChild(card);
            myLibrary.splice(i,1);
            display(myLibrary);
        })
    }

}


const addBook = document.querySelector(".add");
const dialog = document.getElementById("Dialog");
addBook.onclick = () => {
    dialog.showModal();
};

const cancel = document.getElementById("cancel");
cancel.onclick = () => {
    dialog.close();
}

addBookToLibrary();


const log = document.querySelector(".log");
log.onclick = () => {
    alert("Coming soon !!!");
}
