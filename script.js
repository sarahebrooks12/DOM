
// // var greeting = "Hello, world!"
// // document.querySelector("#hello-container").innerHTML = greeting

// // In your index.html file, create an empty <ul> element and give it an id of #chores-container
// // In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
// // Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
// // You should end up with a bulleted list of all your regular chores.

// var choresArray = ["sweep til the floors all clean", "polish and wax", "do laundry", "mop", "shine up", "sweep again"]

// for (var i = 0; i < choresArray.length; i++){
//     console.log(choresArray[i])
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
// }

// Copy and paste the following code between the <body> tags of your HTML document:
// {/* <section id="movie-poster">
//   <h1 id="title"></h1>
//   <h2 id="genre"></h2>
//   <h3 id="release-date"></h3>
// </section> */}
// In your JavaScript file, copy and paste the following object:
var movieObject = {
  title: "Star Wars: A New Hope",
  genre: "Science Fiction",
  releaseDate: "May 25, 1977"
}
for (var i = 0; i < movieObject.length; i++)
console.log(movieObject[i])
document.querySelector("#h1").innerHTML += `${movieObject[i]}`
// Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc). 