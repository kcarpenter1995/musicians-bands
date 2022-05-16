const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({name: 'Beatles'})
        expect(band.name).toBe('Beatles');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({name: 'Ringo Star'})
        expect(musician.name).toBe('Ringo Star');
    })
})