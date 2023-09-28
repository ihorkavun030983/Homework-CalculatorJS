const selectAction = prompt('Введіть add, sub, mult or div');
const firstNumber = +prompt('Введіть перше число');
const lastNumber = +prompt('Введіть друге число');

console.log(firstNumber !== NaN);
console.log(lastNumber !== NaN);


if (selectAction === 'add')
{
    alert(firstNumber + lastNumber, typeof NaN);
    
} else if(selectAction === 'sub')
{
    alert(firstNumber - lastNumber);
} else if(selectAction === 'mult')
{
    alert(firstNumber * lastNumber);
} else if(selectAction === 'div')
{
    alert(firstNumber / lastNumber);
}
