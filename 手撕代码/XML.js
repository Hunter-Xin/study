const xhr = new XMLHttpRequest();
xhr.open("GET", "/手撕代码/1_Promise常见面试题.js", false);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("2222");
  } else {
    console.log("err");
  }
};
