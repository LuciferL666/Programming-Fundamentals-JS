function loadingBar(number){

    let procentCount = '%'.repeat(number/10);
    let dotsCount = '.'.repeat(10 - procentCount.length)

if(number === 100){
    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
}else if(number < 100){
    console.log(`${number}% [${procentCount}${dotsCount}]`);
    console.log('Still loading...');
}

}
loadingBar(100)