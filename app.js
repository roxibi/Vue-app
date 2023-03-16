console.log("hello, vue");
const app = Vue.createApp({
    //data, functions, template
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            url:'https://www.google.com',
            showBook: true,
            books: [
                {       title: "1Ansichten eines Clowns",
                author: "1Heinricht Böll", img:'http://placekitten.com/200/300', isFav:true,},
                {       title: "2Ansichten eines Clowns",
                author: "2Heinricht Böll", img:'http://placekitten.com/200/300', isFav:false,},
                {       title: "3Ansichten eines Clowns",
                author: "3Heinricht Böll", img:'http://placekitten.com/200/300', isFav:true,},
            ]
     
           
        };
     
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBook () {
            this.showBook = !this.showBook
        },
        handleEvent(e, data){
          if  (data) {console.log(e)}
        },
        handleMouseMove(e){
this.x=e.offsetX
this.y=e.offsetY
        },
        toggleFav(book) {
            book.isFav=!book.isFav
        },
      
},
computed:
{
   filteredBooks () {
        return this.books.filter((book)=>(book.isFav))
    }
    }
}
);

app.mount("#app");
