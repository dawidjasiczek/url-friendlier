exports.friendly = function(name) {
    if(typeof name != "string"){
        console.log("Conversion error. URLFRIENDLER requires a string")
        return "Conversion error. URLFRIENDLER requires a string"
    }
    //Remove white spaces
    n = name.trim();
    //To lower case
    n = n.toLowerCase();
    //Change polish signs to counterparts
     n = n.replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ż/g, 'z')
    .replace(/ź/g, 'z');
    //Every sign out of [a-z0-9_] to empty
    n = n.replace(/[^a-z0-9_-\s]/g, '')
    //Double spaces to one space
    n = n.replace(/\s+/gm, ' ')
    // Speces to "-""
    n = n.replace(/\s/gm, '-')
    // Double - to one
    n = n.replace(/[-]{2,}/gm, "-")
    return n

}