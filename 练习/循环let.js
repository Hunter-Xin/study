// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    // console.log(this.i);
    console.log(i);
  }, i * 1000);
}
