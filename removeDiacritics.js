function removeDiacritics(inputText) {
    //odstaní diakritiku z textu, převede na malé písmena
    //příklad: removeDiacritics("a ěšč řžýáíéÉÍÁÝŽŘČŠĚĎŤŇÔŮÚ")
    //výstup:                  > a esc rzyaieEIAYZRCSEDTNOOU
    console.log(inputText);

    var r = inputText.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[æ]/g), "ae");
    r = r.replace(new RegExp(/[çč]/g), "c");
    r = r.replace(new RegExp(/[ď]/g), "d");
    r = r.replace(new RegExp(/[èéêëě]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/[ñň]/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[œ]/g), "oe");
    r = r.replace(new RegExp(/[ř]/g), "r");
    r = r.replace(new RegExp(/[š]/g), "s");
    r = r.replace(new RegExp(/[ť]/g), "t");
    r = r.replace(new RegExp(/[ůùúûü]/g), "u");
    r = r.replace(new RegExp(/[ýÿ]/g), "y");
    r = r.replace(new RegExp(/[ž]/g), "z");
    // r = r.replace(new RegExp(/\W/g), ""); //non-word character //BOHUŽEL i "-"
    console.log(r);
    return r;
}
