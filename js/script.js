var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// var tooltip = document.querySelector(".tooltipp");
// $(tooltip).click(function () {
//   $(tooltip).attr("title", "Copied");
// });
// var btn = document.querySelector(".btn1");
// var heading = document.querySelector("#headingOne");
// // $(heading).hover(
// //   function () {
// //     isHoverSpecialDiv = true;
// //   },
// //   function () {
// //     isHoverSpecialDiv = false;
// //   }
// // );

// // $(heading).mouseenter(function () {
// //   if ((isHoverSpecialDiv = true)) {
// //     heading.style.backgroundColor = "#212529";
// //     btn.style.color = "white";
// //   }
// // });
// // $(heading).mouseleave(function () {
// //   heading.style.backgroundColor = "#fff";
// //   btn.style.color = "black";
// // // });

// $(btn).mouseenter(function () {
//   btn.style.backgroundColor = "#212529";
//   btn.style.color = "white";
// });
// function myFunction(counter) {
//   btn.style.backgroundColor = "#E7F1FF";
//   btn.style.color = "#0C63E6";
//   counter++;
//   if (counter == 2) {
//     btn.style.backgroundColor = "#fff";
//     btn.style.color = "black";
//   }
// }
// $(btn).mouseleave(function () {
//   btn.style.backgroundColor = "#fff";
//   btn.style.color = "black";
// });
