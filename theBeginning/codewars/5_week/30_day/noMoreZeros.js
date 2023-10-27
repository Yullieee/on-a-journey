/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

*/

function noBoringZeros(n) {
  const endZeros = /0+$/;
  return n ? parseInt(n.toString().replace(endZeros, '')) : 0;
}