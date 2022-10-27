const inputs = document.querySelectorAll('input');

const patterns = {
    first_name: /^[a-z]+$/i,
    last_name: /^[a-z]{1,20}$/i,
    user_email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone_number: /^\d{11}$/,
    pwd: /^[\w@-]{8,20}$/,
    confirm_pwd: /^[\w@-]{8,20}$/
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            validate(e.target, patterns[e.target.attributes.name.value])
        })
})
