// alert("hello world")

const bookTitles = document.getElementsByClassName('title')
//turning an html collection into an array
Array.from(bookTitles).forEach(element => {
    console.log(element)
});



