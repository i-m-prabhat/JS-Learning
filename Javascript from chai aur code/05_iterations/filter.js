// const coding = ["js", "ruby", "java", "cpp", "python"];


// const values = coding.forEach((item) =>
// {
//     console.log(item);
//     return item;
// })

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let new_nums = (myNums.filter((num) => num > 4))
// let new_nums = (myNums.filter((num) =>
// {
//     return num > 4
// }
// ))


const new_nums = []

myNums.forEach((num) =>
{
    if (num > 4)
    {
        new_nums.push(num);
    }
})


console.log(new_nums);

const books = [
    {
        title: "The Great Gatsby",
        genre: "Classic Fiction",
        publicationDate: 1925,
        edition: "First Edition"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Literary Fiction",
        publicationDate: 1960,
        edition: "Revised Edition"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        publicationDate: 1997,
        edition: "First Edition"
    },
    {
        title: "1984",
        genre: "Dystopian Fiction",
        publicationDate: 1949,
        edition: "First Edition"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publicationDate: "1954-1955",
        edition: "Revised Edition"
    },
    {
        title: "Pride and Prejudice",
        genre: "Classic Fiction",
        publicationDate: 1813,
        edition: "First Edition"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-Age Fiction",
        publicationDate: 1951,
        edition: "First Edition"
    },
    {
        title: "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
        genre: "Fantasy",
        publicationDate: 1950,
        edition: "Second Edition"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publicationDate: 1937,
        edition: "First Edition"
    },
    {
        title: "Brave New World",
        genre: "Dystopian Fiction",
        publicationDate: 1932,
        edition: "First Edition"
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery, Thriller",
        publicationDate: 2003,
        edition: "Second Edition"
    },
    {
        title: "Gone with the Wind",
        genre: "Historical Fiction",
        publicationDate: 1936,
        edition: "Second Edition"
    },
    {
        title: "The Alchemist",
        genre: "Fantasy, Self-help",
        publicationDate: 1988,
        edition: "First Edition"
    },
    {
        title: "The Picture of Dorian Gray",
        genre: "Gothic Fiction",
        publicationDate: 1890,
        edition: "Second Edition"
    },
    {
        title: "The Hunger Games",
        genre: "Dystopian Fiction",
        publicationDate: 2008,
        edition: "First Edition"
    },
    {
        title: "The Kite Runner",
        genre: "Historical Fiction",
        publicationDate: 2003,
        edition: "Second Edition"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        genre: "Science Fiction, Comedy",
        publicationDate: 1979,
        edition: "Second Edition"
    },
    {
        title: "Moby-Dick",
        genre: "Adventure, Drama",
        publicationDate: 1851,
        edition: "First Edition"
    },
    {
        title: "The Shining",
        genre: "Horror",
        publicationDate: 1977,
        edition: "First Edition"
    }
]

let userBooks = books.filter((bk) => bk.edition === 'First Edition');

userBooks = books.filter((bk) => 
{
    return bk.publicationDate >= 2000 && bk.genre === "Historical Fiction"
}
)

console.log(userBooks)