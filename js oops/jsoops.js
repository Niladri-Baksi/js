// console.log("hello world!");
// const circle = {
//   radius: 1, //properties of the circle
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     //method of the circle
//     // if one or more methods : behavior

//     console.log("Drawing circle");
//   },
// };
// circle.draw();
// if methods or behaviors present then duplicating will be an issue instead we use factories or constructor fns

//factory function
function createCircle(radius) {
  return {
    radius, //if key and value are same we can write jus the key
    draw: function () {
      console.log("draw");
      console.log(radius);
    },
  };
}
const circle = createCircle(1);
circle.draw();

//constructor function
