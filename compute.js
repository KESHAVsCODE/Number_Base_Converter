const input_option = document.getElementById('input_option');
const output_option = document.getElementById('output_option');
const input_area = document.getElementById('input_area');
const output_area = document.getElementById('output_area');

const convertBtn = document.getElementById('submit');
const swapBtn = document.getElementById('swap');

const baseObject = {
    "Binary": 2,
    "Octal": 8,
    "Decimal": 10,
    "Hexadecimal": 16
}

convertBtn.addEventListener('click', () => {
    const input_base = input_option.options[input_option.selectedIndex].value; // input_option.value;
    const output_base = output_option.options[output_option.selectedIndex].value;// output_option.value;
    
    let input_value = input_area.value;

    let sourceBase;
    let targetBase = baseObject[output_base];

    if (input_base === "Binary" && /^[01]+$/.test(input_value))
        sourceBase = 2;
    else if (input_base === "Octal" && /^[0-7]+$/.test(input_value))
        sourceBase = 8;
    else if (input_base === "Decimal" && /^\d+$/.test(input_value))
        sourceBase = 10;
    else if (input_base === "Hexadecimal" && /^[0-9A-Fa-f]+$/.test(input_value))
        sourceBase = 16;
    else {
        output_area.style.color = 'red';
        output_area.value = `Invalid ${input_base} number!`;

        return;
    }
    output_area.style.color = 'black';    
    output_area.value = convertBase(input_value, sourceBase, targetBase);
    
});
function convertBase(number, sourceBase, targetBase) {
  
  let decimalNum = parseInt(number, sourceBase);
  
  let targetNum = decimalNum.toString(targetBase);

  return targetNum;
}

swapBtn.addEventListener('click', () => {
    let input_temp, output_temp;
    input_temp = input_option.options[input_option.selectedIndex].value;
    output_temp = output_option.options[output_option.selectedIndex].value
    input_option.value = output_temp;
    output_option.value = input_temp;
    //console.log(input_temp, output_temp);
})
