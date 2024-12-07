function ValidForm() {
    if (ValidForm() && ValidMail()) {
        alert("Message envoyé !")
    }
    
}

function ValidTel() {
    let tel = document.getElementById('tel').value;
    const telRegex = /^(0|\+33|0033)[1-9][0-9]{8}$/;
    if (!telRegex.test(tel)) {
        alert('Veuillez saisir un numéro de téléphone de la forme +33, 0033, 06...');
        return false;
    } else {
        return true;
    }
}

function ValidMail() {
    let mail = document.getElementById('mail').value;
    const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!mailRegex.test(mail)) {
        alert('Veuillez saisir un e-mail valide.')
        return false;
    } else {
        return true;
    }
}