exports.friendly = function(name, skipLanguages=false) {
    if(typeof name != "string"){
        console.log("Conversion error. URLFRIENDLER requires a string")
        return "Conversion error. URLFRIENDLER requires a string"
    }
    //Remove white spaces
    n = name.trim();
    //To lower case
    n = n.toLowerCase();
    if(skipLanguages == false){

    
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

    //Change german signs to counterparts
    n = n.replace(/ä/g, 'ae')
    .replace(/é/g, 'e')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .replace(/è/g, 'e');
    }

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