new SimpleLightbox({ elements: ' .container-galerie a' });
new SimpleLightbox({ elements: ' .orar-imagini a' });

AOS.init({
    duration: 950,
    offset: 100,
    once: true
});

emailjs.init("z2gEhebCLdNdsrbB7");

function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_r7z6hd6", "template_uz9l4g4", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}