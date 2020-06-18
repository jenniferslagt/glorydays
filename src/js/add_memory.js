function AddSendButtonToInputTextFields() {
    const inputTextFields = Array.from(document.querySelectorAll('.input-text'));
    if (inputTextFields) {
        inputTextFields.forEach((element, index) => {
            inputTextFields[index].insertAdjacentHTML('beforeend', `
            <img src="/icons/send.svg" alt="send button" id='send-button-${index}' class="send-button">
        `);
        });
    }
    checkClickedInputSendButton();
}

function checkClickedInputSendButton() {
    const inputSendButtonsArray = Array.from(document.querySelectorAll('.send-button'));
    if (inputSendButtonsArray) {
        inputSendButtonsArray.forEach((element, index) => {
            inputSendButtonsArray[index].addEventListener('click', addTextBaloon(index));
            // inputSendButtonsArray[index].addEventListener('keyup', onKeyEnter(event));
        });
    }
}

function addTextBaloon(index) {
    return function () {
        const initialInputFieldArray = Array.from(document.querySelectorAll('.input-text input[type="text"]'));
        const initialInputArray = Array.from(document.querySelectorAll('.input-text'));
        let valueInitialInputField = initialInputFieldArray[index].value;
        const initialInputField1 = initialInputFieldArray[index];
        const initialInputField = initialInputArray[index];

        if (valueInitialInputField != '') {

            if (initialInputField1.id == 'keywords') {
                initialInputField.insertAdjacentHTML('beforebegin', `
                <div class='output'><input name="keywords" class='output-textarea output-keyword' rows='1' style='width:${valueInitialInputField.length + 1}rem;' value='${valueInitialInputField}'/></div>`);
            }
            if (initialInputField1.id == 'title') {
                initialInputField.insertAdjacentHTML('beforebegin', `
                <div class='output'><input name="title" class='output-textarea' rows='1' value='${valueInitialInputField}'/></div>`);
            }
            if (initialInputField1.id == 'description') {
                initialInputField.insertAdjacentHTML('beforebegin', `
                <div class='output'><input name="description" class='output-textarea' rows='1' value='${valueInitialInputField}'/></div>`);
            }
        }
        initialInputFieldArray[index].value = '';
    };
}

// function onKeyEnter(event) {
//     // console.log('hallo hgh');
//     console.log(event);
//     // if (window.event.keyCode === 13) {
//     //     // Cancel the default action, if needed
//     //     event.preventDefault();
//     //     console.log('hallo hgh');
//     // }


//     // event.preventDefault();
//     // if (event.keyCode === 13) {
//     //     inputSendButtonsArray[index].click();
//     // }
//     // });
// }

AddSendButtonToInputTextFields();