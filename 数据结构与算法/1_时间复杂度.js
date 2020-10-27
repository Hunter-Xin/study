// O(1)
let i = 0;
i += 1;

// O(n)
for (let i = 0; i < n; i++) {
  console.log(i);
}

// O(n)*O(n) = O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
// O(logN)
let i = 1;
while (i < n) {
  console.log(i);
  i *= 2;
}
