document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;

    if (email) {
        alert("Grazie per esserti iscritto! Controlla la tua email per confermare l'iscrizione.");
        document.getElementById("signup-form").reset();
    } else {
        alert("Per favore, inserisci un'email valida.");
    }
});
