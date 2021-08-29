let words = [{
        // jumbled : "arhyr totpe",
        // correct : "harry potter"
        jumbled: "todoverlm",
        correct: "voldemort"
    },
    {
        jumbled: "oghaswrt",
        correct: "hogwarts"
    },
    {
        jumbled: "emgugl",
        correct: "muggle"
    },
    {
        jumbled: "ecrwvlnaa",
        correct: "ravenclaw"
    },
    {
        jumbled: "yifngdorrf",
        correct: "gryffindor"
    },
    {
        jumbled: "yisrlhnet",
        correct: "slytherin"
    },
    {
        jumbled: "plufffhufe",
        correct: "hufflepuff"
    },
    {
        jumbled: "chidtiduq",
        correct: "quidditch"
    },
]

let currentWord = 0;
let score = 0;

function displayWord() {
    document.querySelector("#j-word").innerText = words[currentWord].jumbled;
    document.querySelector("#score").innerText = score;
}


displayWord();


function checkAnswer() {

    let answer = document.querySelector("#inp").value;

    if (answer.toLowerCase() === words[currentWord].correct.toLowerCase()) {

        score++;

    }

    if (currentWord == words.length - 1) {

        let msg = "";

        if (score === 8) {
            msg = "That's amazing. You scored perfect " + score;
        } else if (score > 4 | score <= 7) {
            msg = "Your score is : " + score + ". Good Game. But can do better. "
        } else if (score < 4) {
            msg = "Your score is :" + score + ". Nice try! Learn more about wizarding world."
        }

        alert(msg);

        location.reload();
    } else {
        currentWord++;
        displayWord();
        document.querySelector("#inp").value = "";
    }

}