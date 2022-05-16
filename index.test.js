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

    test('Has many musicians', async () => {
        const band = await Band.create({name: 'Beatles', genre: 'Rock'});

        const ringo = await Musician.create({name: 'Ringo Star', instrument: 'Drums'});
        const john = await Musician.create({name: 'John Lennon', instrument: 'Lead Vocals and Guitar'});
        const paul = await Musician.create({name: 'Paul McCartney', instrument: 'Backup Vocals and Keyboard'});
        const george = await Musician.create({name: 'George Harrison', instrument: 'Guitar'});

        await band.addMusician(ringo);
        await band.addMusician(john);
        await band.addMusician(paul);
        await band.addMusician(george);
        
        const musicians = await band.getMusicians();

        expect(musicians.length).toBe(4);
        expect(musicians[0] instanceof Musician).toBeTruthy;

    })    
            
})