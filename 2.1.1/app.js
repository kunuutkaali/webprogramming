/*
 * vue app, controls, in casu, part of a page
 * in other cases it would be the total application
 */
// Vue is ref to script in html
const app = Vue.createApp({
    // root component, setting up data, methods
    data() {                            // create data function
        return {                        // that returns an object
            pageTitle: "Give a word",
            word: "",
            experation: ""
        }
    },
    mounted() {
        //Check if localStorage expirationdate exists
        if(localStorage.experation){
            // Expiration exists, set experation
            this.experation = localStorage.experation
        }else{
            // Experation date does not exists, create new experationdate
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            this.experation = tomorrow;
            localStorage.experation = tomorrow;
            // Also set word:
            
        }
        // Check if expired
        
        // Get todays date:
        const now = new Date();
        if(this.experation > now){
            console.log('Expired!');
            // New word
        }else{
            console.log('Not expired!');
        }
      },
    methods: {                          // component methods
        // toggleShowBooks() {
        //     this.nowYouSeeMe = !this.nowYouSeeMe;
        // },
        // toggleFav(item){ // Toogle fav
        //     item.isFav = !item.isFav;
        // }
    }
});

app.mount('#app');                      // refers to selector in page