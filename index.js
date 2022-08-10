//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

let recipe = {
  title: "THE BEST TOFU SCRAMBLE",
  servings: 3,
  ingredients: [
    "olive oil",
    "block firm tofu",
    "nutritional yeast salt ",
    "teaspoon turmeric",
    "garlic powder",
    "2 tablespoons non-dairy milk",
  ],
};
console.log(recipe.title);
console.log(Object.entries(recipe)[1].join(": "));
console.log(Object.keys(recipe)[2] + ":");
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);
console.log(recipe.ingredients[4]);
console.log(recipe.ingredients[5]);
console.log(recipe.ingredients[6]);

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
let books = [
  {
    title: "Sword of Destiny",
    author: "Andrzej Sapkowski",
    alreadyRead: true,
  },
  {
    title: "The Last Wish",
    author: "Andrzej Sapkowski",
    alreadyRead: false,
  },
  {
    title: "Blood of Elves",
    author: "Andrzej Sapkowski",
    alreadyRead: true,
  },
];
for (const key in books) {
  console.log(`The ${books[key].title} by ${books[key].author}`);
}

for (const key in books) {
  books[key].alreadyRead
    ? console.log(
        `You already read the ${books[key].title} by ${books[key].author}`
      )
    : console.log(
        `You steel need to read the ${books[key].title} by ${books[key].author}`
      );
}
