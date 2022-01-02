// part 1
let baseUrl = "http://deckofcardsapi.com/api/deck/";
async function singleCard(){
    let oneCardSuffl = await axios.get(`${baseUrl}/new/draw/`);
    // destructure to get the needed values
    let {suit, value} = oneCardSuffl.data.cards[0]; // .data.cards[0] comes from API
    // console.log(oneCardSuffl);
    console.log(`${suit}, ${value}`);
}





// ####################################
/*

$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    // 1.
    async function part1() {
      let data = await $.getJSON(`${baseURL}/new/draw/`);
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
  
    // 2.
    async function part2() {
      let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
      let deckId = firstCardData.deck_id;
      let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
      [firstCardData, secondCardData].forEach(card => {
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      });
    }
  
    // 3.
    async function setup() {
      let $btn = $('button');
      let $cardArea = $('#card-area');
  
      let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
      $btn.show().on('click', async function() {
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (cardData.remaining === 0) $btn.remove();
      });
    }
    setup();
  });
  
*/