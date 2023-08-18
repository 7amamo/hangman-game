
//  add information in letters /////

let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersarray = Array.from(letters);

let letterscontainer = document.querySelector(".letters");

lettersarray.forEach(function(letter){

    let span = document.createElement('span');
    span.className = "letter-box"
    let content = document.createTextNode(letter)
    span.appendChild(content);
    letterscontainer.appendChild(span)

})


// ////////// add information /////////
let  words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allkeys = Object.keys(words);
let category = allkeys[Math.floor(Math.random() * allkeys.length)];
document.querySelector(".category span").innerHTML = category;

let randomnames = words[category];
let randomname = randomnames[Math.floor (Math.random() * randomnames.length)]

///////// add span to letters-guess //////////

let letterandspace = Array.from(randomname);

letterandspace.forEach(function(letter){
    let lettersGuesscontainer = document.querySelector(".letters-guess")
    emptyspan = document.createElement("span")
    lettersGuesscontainer.appendChild(emptyspan)

    if(letter === " "){
        emptyspan.className = "with-space"
    }

})

////////////

let guessSpans = document.querySelectorAll(".letters-guess span");
let theDraw = document.querySelector(".hangman-draw");
let wrongAttempts = 0;
let rightanswer = 0;


document.addEventListener("click", function(e){
    let theStatus = false;

    if( e.target.className === "letter-box"){
        e.target.classList.add("clicked")  

        let theclickedlitters = e.target.innerHTML

        letterandspace.forEach(function(wordletter,wordindex){
            if(theclickedlitters === wordletter){
                rightanswer++;
                console.log(rightanswer)
                theStatus = true;
                guessSpans.forEach(function(span , spanindex){
                    if (spanindex === wordindex){
                        span.innerHTML = theclickedlitters;
                    }
                })
            }
        })

        if (theStatus != true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`)

            if(wrongAttempts === 8){
                endgame()
                letterscontainer.classList.add("finished");
            }
        }

        else if (rightanswer == letterandspace.length){
            cong()
        }
        
        else{

        }
    }

})
function cong(){
    let div = document.createElement("div");
    div.appendChild(document.createTextNode("congratulation"));   
    div.className = 'popup';
    document.body.appendChild(div);
};

function endgame (){
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game Over, The Word Is ${randomname}`);
    div.appendChild(divText);   
    div.className = 'popup';
    document.body.appendChild(div);

}