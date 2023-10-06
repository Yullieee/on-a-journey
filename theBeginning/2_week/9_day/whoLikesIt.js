function likes(names) {
  let length = names.length;
  switch(length) {
      case 0:
        return "no one likes this";
      case 1:
        return `${names[0]} likes this`;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
        return `${names.slice(0, 2).join(', ')} and ${length - 2} others like this`;
  }
}

console.log(likes(['peter','mathis','alexis','cassandra']));