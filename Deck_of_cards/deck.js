
const BASE_URL = "https://deckofcardsapi.com/api/deck";

// // this has deck_id in it
// // http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

// let togetDeck_id = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
// // togetDeck_id.then(resp => console.log(resp.data.deck_id));
// let deckId = togetDeck_id.then(resp => console.log(resp.data));
// let id = deckId["deck_id"];

// // To draw a single card
// let singleDraw = "http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1";




// Most of it is not my own work

$(function() {
    // let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    // 1.
    $.getJSON(`${BASE_URL }/new/draw/`).then(data => {
      let { suit, value } = data.cards[0];
    //   console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    console.log(`${value}, ${suit}`);

    });
  
    // 2.
    let firstCard = null;
    $.getJSON(`${BASE_URL }/new/draw/`)
      .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${BASE_URL }/${deckId}/draw/`);
      })
      .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
          console.log(
            `${card.value} of ${card.suit}`
          );
        });
      });
  
    // 3.
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
  
    $.getJSON(`${BASE_URL }/new/shuffle/`).then(data => {
      deckId = data.deck_id;
      $btn.show();
    });
  
    $btn.on('click', function() {
      $.getJSON(`${BASE_URL }/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
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
        if (data.remaining === 0) $btn.remove();
      });
    });
  });
  