// alert("hello world")

// const books = document.querySelectorAll('title')
// //turning an html collection into an array
// Array.from(books).forEach(element => {
//     console.log(element.textContent)
// });


//to get the content of the div-id(will bring everything in the div), li(will bring everything inside the li tag including the span) class(.name will bring the content of name class)
// const bookTitles = document.querySelectorAll('#book-list li .name')
// Array.from(bookTitles).forEach(books => {
//     books.textContent += " helloooo  there"//appending a string to the html element inside javascript the hello there will attach each of the book name
// });

//updating a javascript elements


// const books = document.querySelector('#book-list')
//to replace all the existing html in that #book-list div
// books.innerHTML = '<h2>More books</h2>'
//to append a new html to #book-list div
// books.innerHTML += "<h1>more books more books</h1>"


//DOM NODES
// const banner = document.querySelector("#page-banner")
// console.log("#page-banner node type is: ", banner.nodeType)//node type
// console.log("#page-banner node name is: ", banner.nodeName)//node name is a div
// console.log("#page-banner has child node: ", banner.childNodes)//child nodes

//we als check to see if it has child nodes, meaning if it has other html elements inside that div

//banner(#page-banner) node type is 1 meanin it is an html element

//TRAVERSING IN THE DOM
//for example checking to see if a selected div has a parent div

const list = document.querySelector("#book-list")
// console.log("list is parent is: ", list.parentNode)
console.log("list is parent is: ", list.previousSibling)
console.log("list is parent is: ", list.previousElementSibling)
