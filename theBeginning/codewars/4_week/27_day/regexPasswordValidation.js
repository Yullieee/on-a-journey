/*

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

*/

const REGEXP = /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*\d{1,})[A-Za-z\d]{6,}$/;