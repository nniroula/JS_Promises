// part 1
let baseUrl = "http://deckofcardsapi.com/api/deck";

async function singleCard(){
    let oneCardSuffl = await axios.get(`${baseUrl}/new/draw/`);
    // destructure to get the needed values
    let {suit, value} = oneCardSuffl.data.cards[0]; // .data.cards[0] comes from API
    // console.log(oneCardSuffl);
    console.log(`${suit}, ${value}`);
}

// part 2
async function newlySuffledCard(){
    let newSuffledCardData = await axios.get(`${baseUrl}/new/draw/`);
    // console.log(newSuffledCard.data.deck_id);
    let deckId = newSuffledCardData.data.deck_id;
    let secondSuffledCardData = await axios.get(`${baseUrl}/${deckId}/draw/`);
    [newSuffledCardData, secondSuffledCardData].forEach(val => {
        // destructure here to get back certain data from whole list of data
        let {suit, value} = val.data.cards[0];
        console.log(`${suit}, ${value}`);
    })
    // console.log(secondSuffledCardData);
}

/* part 3 is Not yet fully functional */
// part 3 
async function htmlCardDraw(){
    let $button = $('button');  // retrieve button
    let $cardArea = $('#card-area'); // retrieve cardArea

    let dataFromDeck = await axios.get(`${baseUrl}/new/shuffle/`);

    $button.show().on('click', async function(){
        let cardData = await $.getJSON(`${baseUrl}/${dataFromDeck.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css:{
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (cardData.remaining === 0) $btn.remove();
    });  
}