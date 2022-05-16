const {Band} = require('./Band')
const {Musician} = require('./Musician')

Musician.belongsTo(Band) //adds a foreign key on the musician table
Band.hasMany(Musician)

module.exports = {
    Band,
    Musician
};
