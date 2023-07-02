const size = 3; // Change this value to adjust the size of the diamond

for (let i = 0; i < size; i++)
{
    let row = '';
    for (let j = 0; j < size - i; j++)
    {
        row += ' ';
    }
    for (let k = 0; k <= i; k++)
    {
        row += '* ';
    }
    console.log(row);
}

for (let i = size - 2; i >= 0; i--)
{
    let row = '';
    for (let j = 0; j < size - i; j++)
    {
        row += ' ';
    }
    for (let k = 0; k <= i; k++)
    {
        row += '* ';
    }
    console.log(row);
}
