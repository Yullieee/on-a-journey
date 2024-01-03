/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url) {
  
  let domain = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/);

  if (domain && domain.length > 1) {
    return domain[1];
  } else {
    return 'there is no domain silly! ^c^';
  }
}

/*

/^(?:https?:\/\/)? => it matches http:// or https://, we're using ?: to declare it's a non capturing group, https? because the s is optional then :\/\/ to match ://, we had a ? at the end because not every domains start with http

(?:www\.)? => it matches www. and the same way, it's a non capturing group and optional, hence the ? at the end

([^\/.]+) => this time it's a capturing group, this negated character class matches everything that is not /. and it looks for one or more character with + and stops when it encounters a dot or a slash

*/