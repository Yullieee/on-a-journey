function dirReduc(arr){
  
  let deleted = false;
  
  for (let i = arr.length - 1; i >= 1 ; i--) {
    switch (arr[i]) {
        case "NORTH":
          if (arr[i-1] === "SOUTH") {
            arr.splice(i-1,2);
            deleted = true;
          }
          break;
        case "SOUTH":
          if (arr[i-1] === "NORTH") {
            arr.splice(i-1,2);
            deleted = true;
          }
          break;
        case "EAST":
          if (arr[i-1] === "WEST") {
            arr.splice(i-1,2);
            deleted = true;
          }
          break;
        case "WEST":
          if (arr[i-1] === "EAST") {
            arr.splice(i-1,2);
            deleted = true;
          }
          break;
    }
  }
  if (deleted) {
    return dirReduc(arr);
  } else {
    return arr;
  }
}