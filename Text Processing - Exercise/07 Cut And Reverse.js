function cutAndReverse (text){
let middle = text.length/2
let firstPart = text
.substring(0,middle)
.split('')
.reverse()
.join('')
let lastPart = text
.substring(middle)
.split('')
.reverse()
.join('')
console.log(firstPart);
console.log(lastPart);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');