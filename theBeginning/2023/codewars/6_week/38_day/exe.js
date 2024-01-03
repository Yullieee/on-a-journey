function tempsMachines(arr1, arr2) {

  let tempsMachine1 = 0;
  let tempsMachine2 = 0;
  const tempsPaires = [];

  for (let i = 0; i < arr1.length; i++) {

    const temps1 = arr1[i];
    const debutMachine1 = tempsMachine1;
    tempsMachine1 += temps1;
    const finMachine1 = tempsMachine1;

    const debutMachine2 = tempsMachine2;
    const temps2 = arr2[i];
    tempsMachine2 = Math.max(tempsMachine1, tempsMachine2) + temps2;
    const finMachine2 = tempsMachine2;

    tempsPaires.push([[debutMachine1, finMachine1], [debutMachine2, finMachine2]]);
  }

  return tempsPaires;
}

const arr1 = [1, 2, 2, 3, 4, 3, 2, 5];
const arr2 = [4, 4, 3, 4, 3, 3, 2, 1];

console.log(tempsMachines(arr1, arr2));

