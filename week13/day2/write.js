const fs = require('fs');

const txt = 'Hello,I am Aya.';

fs.writeFile('newFile.txt', txt, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Done.');
});





const append = 'Buy orange juice';

fs.appendFile('newFile.txt', `\n${append}`, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Done.');
});





fs.unlink( 'newFile.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(' deleted .');
});
