/*
 * vue app, controls, in casu, part of a page
 * in other cases it would be the total application
 */
// Vue is ref to script in html
const app = Vue.createApp({
    // root component, setting up data, methods
    data() {                            // create data function
        return {                        // that returns an object
            pageTitle: "Testing l",
            nowYouSeeMe: true,
            url: 'http://dkexit.eu/',
            url1: 'https://vuejs.org/',

            books: [
                {
                    title: "The Art of Computer Programming, vol 1",
                    subtitle: "Fundamental Algorithms",
                    author: "Donald E Knuth",
                    img: "assets/taocp1.jpg",
                    isFav: true
                },
                {
                    title: "The Art of Computer Programming, vol 2",
                    subtitle: "Seminumerical Algorithms",
                    author: "Donald E Knuth",
                    isFav: false
                },
                {
                    title: "The Art of Computer Programming, vol 3",
                    subtitle: "Sorting and Searching",
                    author: "Donald E Knuth",
                    isFav: false
                },
                {
                    title: "The Code Book",
                    subtitle: "The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
                    author: "Simon Singh",
                    isFav: false
                },
                {
                    title: "IT kommunikation",
                    subtitle: "",
                    author: "Niels Müller Larsen",
                    img: "assets/itk.jpg",
                    isFav: true
                }
            ]
        }
    },
    methods: {                          // component methods
        toggleShowBooks() {
            this.nowYouSeeMe = !this.nowYouSeeMe;
        },
        toggleFav(item){ // Toogle fav
            item.isFav = !item.isFav;
        }
    }
});

app.mount('#app');                      // refers to selector in page