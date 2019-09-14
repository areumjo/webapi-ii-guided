// remove everyting except listen and move it to server.js and import (require)

const server = require('./server.js');

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});

// reason we break index.js to 2 files
//  - we want the listen to happen very last moment
//  - for BE testing