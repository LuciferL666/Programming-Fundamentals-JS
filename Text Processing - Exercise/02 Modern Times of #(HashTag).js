function modernTimes (input){
let text = input.split(' ')

for (const word of text) {
    if(word.includes('#')){
       let usless = word.replace(/[0-9]/g, '')
        console.log(usless.trim().replace(/[^A-Za-z0-9\s!?]/g,''));
    }
    
}

}
modernTimes ('Nowadays everyone uses # to tag a #12312spe1cial word in #soc2ia3lMe1d4ia><')