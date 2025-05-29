var _a;
var Characters;
(function (Characters) {
    Characters["MAIN"] = "Gurami";
    Characters["SIDE"] = "Mariami";
    Characters["ANTAGONIST"] = "Giorgi";
})(Characters || (Characters = {}));
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["MODERATOR"] = "Moderator";
    Roles["PLAYER"] = "Player";
})(Roles || (Roles = {}));
var player;
var userChar = document.getElementById('userChar');
var userRole = document.getElementById('userRole');
var userUsername = document.getElementById('userUsername');
var Confirm = document.getElementById('confirm');
(_a = document.getElementById("confirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var charValue = document.getElementById("userChar").value;
    var roleValue = document.getElementById("userRole").value;
    var username = document.getElementById("userUsername").value;
    var password = document.getElementById("userPass").value;
    player = {
        Character: charValue,
        Role: roleValue,
        Username: username,
        Password: password
    };
    console.log(player);
});
