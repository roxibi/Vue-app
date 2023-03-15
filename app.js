console.log("hello, vue");
const app = Vue.createApp({
    //data, functions, template
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            showBook: true,
            title: "Ansichten eines Clowns",
            author: "Heinricht Böll",
            age: 45,
            place: "Bonn",
        };
     
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBook () {
            this.showBook = !this.showBook
        }
    }
});

app.mount("#app");
