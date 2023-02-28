export default {
    template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.name"
                @input="filter" 
                placeholder="Search"
                type="text" />
        </section>
    `,
    data() {
        return {
            filterBy: { title: '' },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', {...this.filterBy})
        }
    }
}