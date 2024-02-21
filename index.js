let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeScore = 0;
let guestScore = 0;

function increment( player, increment ) {
    
    let points = 0;
    
    switch (increment) {
        case "1":
        points=1;
        break;
        
        case "2":
        points=2;
        break;
        
        case "3":
        points=3;
        break;
        
        default:
        break;
    }
    
    if (player=="home") {
        homeScore+=points;
        homeEl.textContent=homeScore;
    } else {
        guestScore+=points;
        guestEl.textContent=guestScore;
    }
    
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent=homeScore;
    guestEl.textContent=guestScore;
    
}
