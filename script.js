document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value
    var img = document.getElementById('img')
    var form = document.getElementById('form')
    var confirm = document.getElementById('confirm')
    if (validateEmail(email)) {
        img.style.display = 'none'
        form.style.display = 'none'
        confirm.style.display = 'flex'
    } else {
        window.alert('Digite um email valido!')
    }
});

function confirmar() {
    var confirm = document.getElementById('confirm')
    confirm.style.display = 'none'
    img.style.display = ''
    form.style.display = ''
}

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email)
}