export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.name }}</h2>
            <h3>{{ book.price }}</h3>
            <!-- /TODO-Img -->
            <!-- <img :src="" alt=""> -->
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    }
}