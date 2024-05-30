document.addEventListener('DOMContentLoaded', () => {
    const altButton = document.getElementById('task4');
    const fieldsContainer = document.getElementById('fieldcontainer');
    const r_input = createInput('revinput', 'Переверніть число');
    const activateButton = createButton('active', 'Перевернути', 'task', addToCookies);
    const rem_button = createButton('rembutton', 'Видалити', 'task', removeAttribute);

    function createInput(id, placeholder) 
    {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', id);
        input.setAttribute('placeholder', placeholder);
        return input;
    }

    function createButton(id, text, className, onClick) 
    {
        const button = document.createElement('div');
        button.setAttribute('id', id);
        button.setAttribute('class', className);
        button.innerText = text;
        button.addEventListener('click', onClick);
        return button;
    }

    function generateField() 
    {
        fieldsContainer.innerHTML = "";

        fieldsContainer.append(r_input);
        fieldsContainer.append(activateButton);
        fieldsContainer.append(rem_button);
    }

    function removeAttribute() 
    {
        r_input.value = "";
        fieldsContainer.innerHTML = "";
    }

    function reverseNumber(number) 
    {
        return parseInt(number.toString().split('').reverse().join(''));
    }

    function addToCookies() 
    {
        const userInput = parseInt(r_input.value);
        if (isNaN(userInput)) 
        {
            alert("Будь ласка, введіть коректне число.");
            return;
        }

        const reversedNumber = reverseNumber(userInput);
        document.cookie = "reversedNumber=" + reversedNumber;
        alert("Результат: " + reversedNumber);
    }

    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++)
    {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('reversedNumber='))
        {
            const reversedNumber = cookie.substring('reversedNumber='.length, cookie.length);
            const confirmation = confirm("Знайдено збережене значення: " + reversedNumber + ". Натисніть ОК, щоб видалити куки.");
            if (confirmation) 
            {
                document.cookie = "reversedNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                alert("Куки видалено.");
                location.reload();
            } 
            else 
            {
                alert("Куки залишаються.");
            }
            break;
        }
    }

    altButton.addEventListener('click', generateField);
});
