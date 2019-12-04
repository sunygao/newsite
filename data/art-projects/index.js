//shared between server and fe - use commonjs

var RovingWoman = require('./roving-woman.json')

const allWorkObj = Object.assign({ }, RovingWoman); //as an object, for individual work routes

const allWorkArray = []; //list of keys, for next data

Object.entries(allWorkObj).forEach(key => {
    allWorkArray.push(key[0])
});

module.exports = { allWorkObj, allWorkArray }
