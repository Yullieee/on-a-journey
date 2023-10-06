function digitalRoot(n) {
  let arr = n.toString().split('');
  let copy = [];
  let root = 0;
  for (let i = 0; i < arr.length ; i++) {
    root += parseInt(arr[i],10);
    copy.push(arr[i]);
  }
  return (copy.length === 1) ? root : digitalRoot(root);
}

console.log(digitalRoot(4972)); //4+9+7+2=22 => 2+2=4