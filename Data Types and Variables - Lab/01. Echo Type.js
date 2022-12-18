function echoType(name) {
    const dataType = typeof name;

    if (dataType == "string" || dataType == "number") {
        console.log(dataType)
        console.log(name);

    } else if (dataType == "object") {
        console.log(dataType)
        console.log('Parameter is not suitable for printing');
    }


}
echoType('Hello, JavaScript!')