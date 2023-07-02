const size = 7; // specify the size of the diamond
const middle = Math.floor(size / 2); // find the middle index of the diamond

for (let i = 0; i < size; i++)
{
    let row = '';
    for (let j = 0; j < size; j++)
    {
        if (i <= middle)
        {
            if (j >= middle - i && j <= middle + i)
            {
                row += '*';
            } else
            {
                row += ' ';
            }
        } else
        {
            if (j >= middle + i - size + 1 && j <= middle - i + size - 1)
            {
                row += '*';
            } else
            {
                row += ' ';
            }
        }
    }
    console.log(row);
}
