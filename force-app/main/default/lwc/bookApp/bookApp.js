import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
export default class BookApp extends LightningElement {
    query=""
    timer
    key='' //url+'&key='

    books = [];

    connectedCallback(){
        this.fetchBookData();
    }

    fetchBookData(){
         fetch(BOOK_URL + this.query)
            .then(response=>response.json())
            .then(data=>{
                this.books =  data ? this.formatData(data) :[];
                console.log("Formated books data are here",this.books);
                console.log("here the length of books array is ",this.books.length);
                
            })
            .catch(error=>console.error(error));
    }

    formatData(data){
        console.log(data)
        let books =  data.items.map(item=>{
            let id = item.id
            let thumbnail = item.volumeInfo.imageLinks && ( item.volumeInfo.imageLinks.thumbnail)
            let title = item.volumeInfo.title
            let publishedDate = item.volumeInfo.publishedDate
            let averageRating = item.volumeInfo.averageRating ||'NA'
            return {id, thumbnail, title, publishedDate, averageRating}
        })
        return books
    }

    // item.volumeInfo.imageLinks.smallThumbnail ||

    fetchBooksHandler(event){
        this.query = event.target.value;
        window.clearTimeout(this.timer)
        this.timer= setTimeout(()=>{
            this.fetchBookData()
        }, 1000)
    }
}