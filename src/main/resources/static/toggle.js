// Starts at 0 because the initial HTML is Jane Doe (index 0)
var currentUserIndex = 0;

var userArray = [
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "img/jane.png"
    },
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "img/john.png"
    }
];

function toggleUser() {
    // Toggles between 0 and 1
    currentUserIndex = 1 - currentUserIndex;
    
    var nextUser = userArray[currentUserIndex];
    
    // Updates using the kebab-case IDs from your updated toggle.html
    document.getElementById("user-name").innerText = nextUser.name;
    document.getElementById("user-gender").innerText = nextUser.gender;
    document.getElementById("user-image").src = nextUser.image;
}