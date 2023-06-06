const flashcards = document.getElementsByClassName
("flashcards")[0];
const createBox = document.getElementsByClassName
("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker)
// this is the function which displays the cards  
function divMaker(text){
    var div = document.createElement("div");
    var div2 = document.createElement("div"); // creates a new div element, which is actually the flashcard
    var h2_question = document.createElement("h2"); // Here it creates a new element question (respectively answer below). What if we create this in the html and just use it here instead of creating it. That way we can separate the 
    var h2_answer = document.createElement("h2"); // nie shte gi creat-nem tuk i posle shte im dadem classes
    div.className = 'card_face card_face-front';
    div2.className = 'card_body';

    h2_question.setAttribute("style","border-top:1px solid red; padding 15px; margin-top:30px");
    h2_question.innerHTML = text.my_question; // this inserts the dictionary value into the question

    h2_answer.setAttribute("style","text-align: center; display:none; color:red");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div2.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display =="none")
        h2_answer.style.display = "block";
        else
        h2_answer.style.display = "none";
    });

    flashcards.appendChild(div);
}
function addFlashcard(){
    //this is a dictonary which stores two things my question & my answer - keys, 
    var flashcard_info = {
        'my_question': question.value,
        'my_answer' : answer.value
    }
    contentArray.push(flashcard_info); // store dictionary into content array
    localStorage.setItem('items',JSON.stringify(contentArray)); // this updates the array in local storage
    divMaker(contentArray[contentArray.length - 1]); // this passes the current thing that we did through the divmaker func
    question.value = ''; // clear the input fields
    answer.value = ''; // clear the input fields
}
function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}
function hideCreateBox(){
    createBox.style.display = "none";
}
