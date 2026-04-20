const addBtn=document.querySelector('.btn')
const titleInput = document.getElementById('Title')
const authorInput = document.getElementById('Author')
const yearInput = document.getElementById('Year')
const booksContainer = document.querySelector('.books_list')


let books=[]
addBtn.addEventListener('click',function(event){
    event.preventDefault()

    let bookTitle = titleInput.value
    let bookAuthor = authorInput.value
    let bookYear = yearInput.value

    if (bookAuthor == '' || bookTitle == '' || bookYear == '') {
        alert('please Enter data completely :)')
    } else {
        let newBookObject = {
            id: books.length + 1,
            title: bookTitle,
            author: bookAuthor,
            year: bookYear
        }

        books.push(newBookObject)
        setLocalStorage(books)
        tableGenerator(books)
        emptyInput()

    } 
    
})

function setLocalStorage(booksArray) {
    localStorage.setItem('allBooks', JSON.stringify(booksArray))
}


function emptyInput() {
    titleInput.value = ''
    authorInput.value = ''
    yearInput.value = ''
    titleInput.focus()
}


function tableGenerator(booksArray){
    booksContainer.innerHTML=''
    booksArray.forEach(function(book){
        let newBooksTr=document.createElement('tr')
        newBooksTr.className='detail'
        let newBookTitleTd=document.createElement('td')
        newBookTitleTd=book.title
        let newBookAuthorTd=document.createElement('td')
        newBookAuthorTd.innerHTML=book.author
        let newBookYearTd=document.createElement('td')
        newBookYearTd.innerHTML=book.year
        newBooksTr.append(newBookTitleTd,newBookAuthorTd,newBookYearTd)
        booksContainer.append(newBooksTr)
    })
}


function getLocalStorage(){
    let localStorageData=JSON.parse(localStorage.getItem('allBooks'))
    console.log(localStorageData)
    if(localStorageData){
        books=localStorageData
    }
    else{
        books=[]
    }
    tableGenerator(books)

}

window.addEventListener('load',getLocalStorage)