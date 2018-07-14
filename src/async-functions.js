function giveItBackLater(value,callback) {

    setTimeout(function () {
        callback(value);
    }, 100);

}

function addSomePromises() {

}

const promiseToGiveItBackLater = function(value) {
   return Promise.resolve(value);
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }