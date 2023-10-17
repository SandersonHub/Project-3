const db = require('../config/connection');
const { Game, Console } = require('../models');
const gameSeeds = require('./gameSeeds.json');
const consoleSeeds = require('./consoleSeeds.json');

// Generate console ID based on console type 
async function mapConsoleTypeToConsole(consoleType) {

    // Predefined mapping of console types to static IDs
    const consoleIds = {
        'Xbox Series X': 'xbox123',
        'Switch': 'switch456',
        'PS5': 'ps5123'
    };

    // Return ID based on console type, or null
    // return consoleIds[consoleType] || null;
    const console = await Console.find({ name: consoleType });
   
    return consoleId._id;
}

// Event listener waiting for database connnection to open
db.once('open', async () => {
    try {
        // Clear existing games data
        await Game.deleteMany({});

        await Console.deleteMany({})
        const consoles = await Console.insertMany(consoleSeeds);
        console.log(consoles);
        // Seed games with console IDs
        // const gamesWithConsoleData = gameSeeds.map(async game => {
        //     // Generate console ID based on console type
        //     console.log(game)
        //     const consoleId = await mapConsoleTypeToConsole(game.consoleType);
        //     console.log(consoleId);
        //     if (!consoleId) {
        //         throw new Error(`Invalid console type: ${game.consoleType}`);
        //     }
        //     console.log(game.consoleType);
        //     // Return new updated object 
        //     return {
        //         ...game,
        //         console: consoleId
        //         // console: {
        //         //     name: game.consoleType, // Assign console type as console name
        //         //     id: consoleId // Assign generated console ID
        //         // }
        //     };
        // });

        // Insert seeded games with updated console data
        const games = await Game.insertMany([
            {
                "name": "Halo Infinite",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_e695aaa6-01f6-4af5-b4b5-e96ce8092497?wid=1200&hei=1200&qlt=80&fmt=webp"
            },
            {
                "name": "Assassins Creed Valhalla",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_c5fb8c7f-e40f-43ad-8833-5561f30a379f?wid=1200&hei=1200&qlt=80&fmt=webp"
            },
            {
                "name": "Fable",
                "console": consoles[0]._id
            },
            {
                "name": "Psychonauts 2",
                "console": consoles[0]._id
            },
            {
                "name": "Back 4 Blood",
                "console": consoles[0]._id
            },
            {
                "name": "God of War Ragnarok",
                "console": consoles[1]._id
            },
            {
                "name": "Spider-Man: Miles Morales",
                "console": consoles[1]._id
            },
            {
                "name": "Ratchet & Clank: Rift Apart",
                "console": consoles[1]._id
            },
            {
                "name": "Ghost of Tsushima",
                "console": consoles[1]._id
            },
            {
                "name": "Horizon Forbidden West",
                "console": consoles[1]._id
            },
            {
                "name": "The Legend of Zelda: Breath of the Wild",
                "console": consoles[2]._id
            },
            {
                "name": "Animal Crossing: New Horizons",
                "console": consoles[2]._id
            },
            {
                "name": "Super Smash Bros. Ultimate",
                "console": consoles[2]._id
            },
            {
                "name": "Mario Kart 8 Deluxe",
                "console": consoles[2]._id
            },
            {
                "name": "Splatoon 2",
                "console": consoles[2]._id
            }
        
        ]);

        console.log('Games seeded successfully!');
    } catch (error) {
        console.error('Error seeding games:', error);
    }

    // Close db connection
    db.close();

    // Exit Node.js process
    process.exit(0);
});
