document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("task3");
    const fieldsContainer = document.getElementById('fieldcontainer');
    
    const side_A = createInput('side1', 'сторонa 1');
    const side_B = createInput('side2', 'сторонa 2');
    const side_C = createInput('side3', 'сторонa 3');
    const side_D = createInput('side4', 'сторонa 4');
    const side_E = createInput('side5', 'сторонa 5');

    const resultButton = createButton('result', 'Обчислити', 'task', calculateArea);
    const removeButton = createButton('remove', 'Видалити', 'task', removeFields);
    const result = document.createElement('div');

    function createInput(id, placeholder) 
    {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
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

    function generateFields() 
    {
        fieldsContainer.innerHTML = "";

        fieldsContainer.append(side_A);
        fieldsContainer.append(side_B);
        fieldsContainer.append(side_C);
        fieldsContainer.append(side_D);
        fieldsContainer.append(side_E);

        fieldsContainer.append(resultButton);
        fieldsContainer.append(removeButton);
        fieldsContainer.append(result);
    }

    function calculateArea()
    {
        const side1 = parseFloat(side_A.value);
        const side2 = parseFloat(side_B.value);
        const side3 = parseFloat(side_C.value);
        const side4 = parseFloat(side_D.value);
        const side5 = parseFloat(side_E.value);

        if (isNaN(side1) || isNaN(side2) || isNaN(side3) || isNaN(side4) || isNaN(side5)) 
        {
            result.innerText = "Будь ласка, введіть усі сторони.";
            return;
        }

        const perimeter = side1 + side2 + side3 + side4 + side5;
        const s = perimeter / 2;
        const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3) * (s - side4) * (s - side5));

        result.innerText = "Площа п'ятикутника: " + (isNaN(area) ? "невизначена" : area.toFixed(2));
    }

    function removeFields()
    {
        side_A.value = ""; 
        side_B.value = "";
        side_C.value = "";
        side_D.value = "";
        side_E.value = "";
        result.innerText = "";
        fieldsContainer.innerHTML = "";
    }

    btn.addEventListener('click', generateFields);
});
