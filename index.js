const farmAnimals = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

const ['moo', 'neigh', 'baa', 'oink', 'cluck'] = farmAnimals;
console.log('moo');
console.log('neigh');
console.log('baa');
console.log('oink');
console.log('cluck');

const ['bessie', 'trotter', 'dolly', 'babe', 'little'] = farmAnimals;
console.log('bessie');
console.log('trotter');
console.log('dolly');
console.log('babe');
console.log('little');

const ['blackAndWhite', 'brown', 'black', 'pink', 'white'] = farmAnimals;
console.log('blackAndWhite');
console.log('brown');
console.log('black');
console.log('pink');
console.log('white');




const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] = colors;
console.log('red');
console.log('orange');
console.log('yellow');
console.log('green');
console.log('blue');
console.log('indigo');
console.log('violet');

const ['r', 'o', 'y', 'g', 'b', 'indg', 'v'];
console.log('r');
console.log('o');
console.log('y');
console.log('g');
console.log('b');
console.log('indg');
console.log('v');



const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const ['muppetName', 'color', 'song', 'job', 'partner'] = muppet;
console.log('muppetName');
console.log('color');
console.log('song');
console.log('job');
console.log('partner');



const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const song2 = nestedMuppet.album.song2;
const song4 = nestedMuppet.album.song4;
const nestedJob = nestedMuppet.nestedJob;
const nestedPartner = nestedMuppet.nestedPartner;


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner