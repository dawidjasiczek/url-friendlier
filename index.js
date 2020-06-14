exports.friendly = function(name) {
        if(typeof name != "string"){
            console.log("Conversion error. URLFRIENDLER requires a string")
            return "Conversion error. URLFRIENDLER requires a string"
        }
        // 1. Remove white spaces
        n = name.trim();
        // 2. To lower case
        n = n.toLowerCase();
        // 3. Change polish signs to counterparts
         n = n.replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ł/g, 'l')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/ż/g, 'z')
        .replace(/ź/g, 'z');
        // 4. Every sign out of [a-z0-9_] to empty
        n = n.replace(/[^a-z0-9_\s]/g, '')
        // 4. Double spaces to one space
        n = n.replace(/\s+/gm, ' ')
        // 6. Speces to "-""
        n = n.replace(/\s/gm, '-')

        return n
    
}