
// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const ownerEmail = "kautsargustavian477@gmail.com";

    const subject = encodeURIComponent("Pesan dari " + name);

    const body = encodeURIComponent(
        "Nama: " + name +
        "\nEmail: " + email +
        "\n\nPesan:\n" + message
    );

    window.location.href =
        `mailto:${ownerEmail}?subject=${subject}&body=${body}`;

});
