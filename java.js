// $(document).ready(function(){ 
 
//     $(".primaryContained").on('click', function(){
//     $(".comment").addClass("commentClicked");
//   });//end click
//   $("textarea").on('keyup.enter', function(){
//     $(".comment").addClass("commentClicked");
//   });//end keyup
//   });//End Function
 
// new Vue({
//     el: "#app",
//     data:{
//        title: 'Add a comment',
//       newItem: '',
//       item: [],
//     },
//     methods:{
//       addItem  (){
//       this.item.push(this.newItem);
//         this.newItem = "";
//       }
//   }
 
//   });

let elem = document.getElementById('inputtext');
let butt = document.getElementById('butt');

butt.addEventListener("click", addItem);

function addItem() {
    let comment = document.createElement('div');
    comment.classList = 'comments';
    comment.innerText = elem.value;
    let app = document.getElementById('app');
    app.appendChild(comment);
}

