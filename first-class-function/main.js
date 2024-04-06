function doSomething(num, cb) {
  const newNum = cb(num);

  return newNum;  
}

// 1 -> 5

const res = doSomething(1, function (num) {
  return num + 4;
});

console.log(res);


