//-Contact Form
const formElem = document.getElementById('form');
const firstNameElem = document.getElementById('first-name');
const lastNameElem = document.getElementById('last-name');
const emailElem = document.getElementById('email');
const subjectElem = document.getElementById('subject');
const messageElem = document.getElementById('message');
//*Contact Form
class UI {
    constructor() {
        this.allElementsAreValid = true;
    }

    showError(elem, message) {
        elem.parentElement.classList.add('error');
        const smallElem = elem.parentElement.querySelector('small');
        smallElem.innerHTML = message;
    }

    showSuccess(elem) {
        elem.parentElement.classList.remove('error');
        elem.parentElement.classList.add('success');

        setTimeout(() => {
            elem.parentElement.classList.remove('success');
        }, 2000);
    }

    showSubmitSuccessMessage() {
        if (this.allElementsAreValid) {
            let successMessage = document.createElement('p');
            successMessage.className = 'success';
            successMessage.innerHTML = "Thannk you for contacting us " + firstNameElem.value + " " + lastNameElem.value + "!";
            formElem.appendChild(successMessage);

            setTimeout(() => {
                successMessage.remove();
            }, 2000);
        }
    }

    clearFields() {
        firstNameElem.value = '';
        lastNameElem.value = '';
        emailElem.value = '';
        messageElem.value = '';
        subjectElem.value = '';
    }
}

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    let ui = new UI();

    if (firstNameElem.value === '') {
        ui.showError(firstNameElem, "First Name Required");
        ui.allElementsAreValid = false;
    }
    else {
        ui.showSuccess(firstNameElem);
    }

    if (lastNameElem.value === '') {
        ui.showError(lastNameElem, "Last Name Required");
        ui.allElementsAreValid = false;
    }
    else {
        ui.showSuccess(lastNameElem);
    }

    if (emailElem.value === '') {
        ui.showError(emailElem, "Email Name Required");
        ui.allElementsAreValid = false;
    }
    else {
        ui.showSuccess(emailElem);
    }

    if (subjectElem.value === '') {
        ui.showError(subjectElem, "Subject Required");
        ui.allElementsAreValid = false;
    }
    else {
        ui.showSuccess(subjectElem);
    }

    if (messageElem.value === '') {
        ui.showError(messageElem, "Message Required");
        ui.allElementsAreValid = false;
    }
    else {
        ui.showSuccess(messageElem);
    }

    ui.showSubmitSuccessMessage();
    ui.clearFields();
});