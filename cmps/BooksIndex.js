import { bookService } from '../services/book.service.js'

import BookList from './BookList.js'
import BookFilter from './BookFilter.js'


import BookDetails from './BookDetails.js'
// import BookEdit from './BookEdit.js'

export default {
    template: `
        <section class="book-index">
            <BookFilter @filter="setFilterBy"/>
            <BookList 
                :books="books" 
                v-if="books"
                @remove="removeBook" 
                @show-details="showBookDetails" />
            <!-- <BookEdit @book-saved="onSaveBook"/> -->
            <BookDetails 
                v-if="selectedBook" 
                @hide-details="selectedBook = null"
                :book="selectedBook"/>
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: {},
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === carId)
                    this.books.splice(idx, 1)
                })
        },
        showBookDetails(bookId) {
            this.selectedBook = this.books.find(book => book.id === bookId)
        },
        onSaveCar(newBook) {
            this.books.push(newBook)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.name, 'i')
            return this.books.filter(book => regex.test(book.name))
        }
    },
    created() {
       bookService.query()
            .then(books => this.books = books)
    },
    components: {
        BookFilter,
        BookList,
        BookDetails,
        // BookEdit,
    }
}