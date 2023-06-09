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
//  old version of java script forcomment section
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



// portfolio section

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

