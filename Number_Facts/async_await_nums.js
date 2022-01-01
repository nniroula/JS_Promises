// async await
// part 1
const BASE_URL = "http://numbersapi.com";
let favoriteNumber = 42;

async function getFavNumber(){
    // let favNum = await axios.get(`${BASE_URL}/${favoriteNumber}?json`);
    // apply object destructuring here
    let {data: localVariable} = await axios.get(`${BASE_URL}/${favoriteNumber}?json`);

    // console.log(favNum);
    // console.log(localVariable);
    console.log(localVariable.text);
}
/*
*/
// part 2
let multipleNums = [1, 3, 5];
async function getFactsOfMultipleNums(){
    let multipleNumFacts = await axios.get(`${BASE_URL}/${multipleNums}?json`);
   // Try destructuring
//    let {data: res1, data: res2, data: res3} = await axios.get(`${BASE_URL}/${multipleNums}?json`);

    console.log(multipleNumFacts);
    // console.log(multipleNumFacts.data[0].text); // this does not work
    // console.log(res1);
    // console.log(res2);
    // console.log(res3);
}

// part 3, four facts about a number
async function fourFactsAboutNum(){
    let facts = await Promise.all(
    // await Promise.all(
        // Array.from({ length: 4}, () => {return axios.get(`${BASE_URL}/${favoriteNumber}?json`)})
        // Array.from({ length: 4}, () => axios.get(`${BASE_URL}/${favoriteNumber}?json`))
        Array.from({ length: 4}, () => {return $.getJSON(`${BASE_URL}/${favoriteNumber}?json`)})

        );
        facts.forEach(data => {
            $('body').append(`<p> ${data.text}</p>`);
        });
}


// ######################################
/** 
 in console, do the following
 getFavNumber()
 getFactsOfMultipleNums()
 fourFactsAboutNum()
*/