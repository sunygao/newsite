//shared between server and fe - use commonjs

var RovingWoman = require('./roving-woman.json')

const allArtObj = Object.assign({ }, RovingWoman); //as an object, for individual work routes

const allArtArray = []; //list of keys, for next data

Object.entries(allArtObj).forEach(key => {
    allArtArray.push(key[0])
});

module.exports = { allArtObj, allArtArray }
