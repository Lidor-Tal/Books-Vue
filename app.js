const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import BooksIndex from './cmps/BooksIndex.js'

import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'

const options = {
    template: `
        <section class="container">
            <AppHeader @setRoute="route = $event"/>
            <main class="router-view">
                <HomePage v-if="route === 'HomePage'"/>
                <BooksIndex v-if="route === 'BooksIndex'"/>
                <AboutPage v-if="route === 'AboutPage'"/>
            </main>
            <AppFooter />
        </section>
    `,
    data() {
        return {
            route: 'BooksIndex',
        }
    },
    components: {
        AppHeader,
        AppFooter,
        BooksIndex,
        HomePage,
        AboutPage,
    }
}
const app = createApp(options)
app.mount('#app')
