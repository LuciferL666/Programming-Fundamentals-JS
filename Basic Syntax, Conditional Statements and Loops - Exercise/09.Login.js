function login(input){
let username = input.shift()
let password = username.split('').reverse().join('')

let counter = 0
for(let i = 0; i < input.length;i++){
    counter++
if(password === input[i]){
    console.log(`User ${username} logged in.`);
}else if (counter === 4){
    console.log(`User ${username} blocked!`);
    break;
}else{
    console.log('Incorrect password. Try again.');
}
}
}
login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not',
'sunny'])