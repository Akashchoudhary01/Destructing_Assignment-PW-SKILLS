function wordCounter(str){
    const words = str.split(" ");
    const map = new Map();

    for(let wordsLength of words){
        if(map.has(wordsLength)){
            map.set(wordsLength,map.get(wordsLength)+1);
        }else{
            map.set(wordsLength , 1);
        }
    }
    return map;
}

let inputText = "With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential."
//
console.log(wordCounter(inputText));


//  for (const word in wordCounter){

//     if(wordCounter.hasOwnPrroperty(word)){
//         console.log(`'${word}' appears ${wordCounter[word]} time(s)`);
//     }
//  }