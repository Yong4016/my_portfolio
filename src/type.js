'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 85,
})
  .move(-9)
  .type('Web ')
  .pause(750)
  .delete(4)
  .type('Front-end ')
  .pause(750)
  .delete(10)
  .type('React ')
  .pause(750)
  .delete(6)
  .move(null, { to: 'END' })
  .delete()
  .type('New Graduate')
  .pause(750)
  .delete()
  .move(null, { to: 'END' })
  .type('Just')
  .pause(200)
  .go();
