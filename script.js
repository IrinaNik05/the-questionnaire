const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");

function showMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = message;
    document.body.append(div);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: IrinaNik05'
            },
            body: JSON.stringify({
                "name": userName.value,
                "secondName": secondName.value,
                "phone": phone.value,
                "email": email.value,
                "agree": agree.checked,
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            showMessage('Данные успешно отправлены!');
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            showMessage('Ошибка отправки данных!');
        })

});