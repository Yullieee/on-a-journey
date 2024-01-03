//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.


function isValidIP(str) {
  const octets = str.split('.');
  if (octets.length !== 4) {
    return false;
  }
  for (let i = 0; i < octets.length; i++) {
    const octet = parseInt(octets[i], 10);
    if (isNaN(octet) || octet < 0 || octet > 255 || octets[i] !== octet.toString()) {
      return false;
    }
  }
  return true;
}