// $('.navTrigger').click(function () {
//     $(this).toggleClass('active');
//     console.log("Clicked menu");
//     $("#mainListDiv").toggleClass("show_list");
//     $("#mainListDiv").fadeIn();

// });


// // show on scroll

// window.addEventListener("scroll", function() {showFunction1(); showFunction2(); showFunction3();});

// function showFunction1() {
//     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//         document.querySelector(".conten1").style.display = "block";
//     } else {
//         document.querySelector(".conten1").style.display = "none";
//     }
// }
// function showFunction2() {
//     if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
//         document.querySelector(".conten2").style.display = "block";
//     } else {
//         document.querySelector(".conten2").style.display = "none";
//     }
// }
// function showFunction3() {
//     if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
//         document.querySelector(".conten3").style.display = "block";
//     } else {
//         document.querySelector(".conten3").style.display = "none";
//     }
// }

// console.log(document.documentElement)
const progress= (id, value)=>{
var circleBar = new ProgressBar.Circle(id, {
    color: "#aaa",
    strokeWidth: 6,
    trailWidth: 7,
    trailColor: "#aaa",
    easing: "easeInOut",
    from: { color: "#103cc6", width: 7 },
    to: { color: "#ed3c3c", width: 7 },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        top: '46%',
        left: '45%',
        padding: 0,
        margin: 0,
        transform: null
      }
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  });
  
  circleBar.animate(value, {
    duration: 1500
  });
  }
progress("#commu-pg", 0.87);
progress("#tw-pg", 0.5);
progress("#pm-pg", 0.98);
progress("#crea-pg", 0.46);

