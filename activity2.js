function addUser(){
    player_1 = document.getElementById("player_1").value;
    player_2 = document.getElementById("player_2").value;

    localStorage.setItem("Player_1" , player_1);
    localStorage.setItem("Player_2" , player_2);

    window.location = "game_page.html";
}