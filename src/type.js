'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 80,
})
  .move(-9)
  .type('Web ')
  .pause(850)
  .delete(4)
  .type('Front-end ')
  .pause(850)
  .delete(10)
  .type('React ')
  .pause(850)
  .delete(6)
  .move(null, { to: 'END' })
  .delete()
  .type('New Graduate')
  .pause(850)
  .delete()
  .move(null, { to: 'END' })
  .type('Just')
  .pause(300)
  .go();
