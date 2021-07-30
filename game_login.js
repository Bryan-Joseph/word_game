var word = "";
var answer = "";


player1Name = localStorage.getItem("Player_1");
player2Name = localStorage.getItem("Player_2");

document.getElementById("player1").innerHTML = player1Name + " : ";
document.getElementById("player2").innerHTML = player2Name + " : ";

p1Score = 0;
p2Score = 0;

document.getElementById("player1_score").innerHTML = p1Score;
document.getElementById("player2_score").innerHTML = p2Score;

/**<h3 id="player_question"></h3>
		<h3 id="player_answer"></h3> */

document.getElementById("player_question").innerHTML = "Question Turn - " + player1Name;     
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2Name;

var qT = "player1";
var aT = "player2";

function check() {
    get_answer = document.getElementById("quesA").value;
    answer = get_answer.toLowerCase();
    console.log("to lower case : " + word);

    if (answer == word) {
        if (qT == "player1") {
            p1Score++;
            document.getElementById("player1_score").innerHTML = p1Score;
        }else{
            p2Score++;
            document.getElementById("player2_score").innerHTML = p2Score;
        }

    }

    if (qT == "player1") {
        qT = "player2";
        document.getElementById("player_question").innerHTML = player2Name;
    }else{
        qT = "player1";
        document.getElementById("player_question").innerHTML = player1Name;
    }

    if (aT == "player1") {
        aT = "player2";
        document.getElementById("player_answer").innerHTML = player2Name;
    }else{
        aT = "player1";
        document.getElementById("player_answer").innerHTML = player1Name;
    }

    document.getElementById("output").innerHTML = "";
}

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Lower case word - " + word);

    char1 = word.charAt(1);
    console.log("char1 " + char1);

    lengthBy2 = Math.floor(word.length/2);
    char2 = word.charAt(lengthBy2);
    console.log("char2 " + char2);

    lastchar = word.length - 1;
    char3 = word.charAt(lastchar);
    console.log("char3 " + char3);

    rc1 = word.replace(char1 , "_");
    rc2 = rc1.replace(char2 , "_");
    rc3 = rc2.replace(char3 , "_");

    console.log(rc3);

    question = "<h4>Q. "+ rc3 +"</h4>"
    answer = "<h4>Answer : </h4><input type='text' class='form-control' id='quesA' placeholder='Enter Answer'>"
    button = "<br><br> <button class='btn btn-primary' onclick='check()'>Check</button>"
    row = question + answer + button;

    document.getElementById("word").innerHTML = "";

    document.getElementById("output").innerHTML = row;
}