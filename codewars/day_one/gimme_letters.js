function gimme_letters(sp) {
    
    let s = 0;
    let p = 0;

    if (sp.length === 2) {
        s = sp[0];
        p = sp[1];
    } else if (sp.length === 1) {
        s = sp;
        p = sp;
    } else {
        return "undefined";
    }

    let str = '';

    if (s === s.toUpperCase()) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
        str = 'abcdefghijklmnopqrstuvwxyz';
    }

    const start = str.indexOf(s);
    const end = str.indexOf(p);
    
    const result = str.slice(start, end + 1); //slicing the alphabet from s to p
    
    return result;
}

console.log(gimme_letters('bf'));
