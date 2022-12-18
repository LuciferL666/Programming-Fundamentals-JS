function rightPlace(name, char, finish) {
    let res = name.replace("_", char);
    let end = res === finish ? "Matched" : "Not Matched";
    console.log(end);
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");