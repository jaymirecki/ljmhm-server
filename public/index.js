function jaysays() {
    var sayings = [
        "You're awesome!",
        "You're gorgeous!",
        "How awesome was your day?",
        "Dope swaggity!",
        "You're dressed for something!",
        "Dress the way you want to feel!",
        "You're a star!",
        "There's no one like you!"
    ];
    var i = Math.floor(Math.random() * Math.floor(sayings.length));
    var say = sayings[i];
    console.log(document.getElementById("jaysays"));
    document.getElementById("jaysays").innerHTML = say;
}