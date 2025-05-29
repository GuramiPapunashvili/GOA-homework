enum Characters {
    MAIN = 'Gurami',
    SIDE = 'Mariami',
    ANTAGONIST = 'Giorgi'
}

enum Roles {
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    PLAYER = 'Player'
}

let player: { Character: Characters, Role: Roles, Username: string, Password: string}

document.getElementById("confirm")?.addEventListener("click", () => {
    const charValue = (document.getElementById("userChar") as HTMLSelectElement).value;
    const roleValue = (document.getElementById("userRole") as HTMLSelectElement).value;
    const username = (document.getElementById("userUsername") as HTMLInputElement).value;
    const password = (document.getElementById("userPass") as HTMLInputElement).value;
  
    player = { Character: charValue as Characters, Role: roleValue as Roles,
            Username: username, Password: password };
  
    console.log(player);
});

