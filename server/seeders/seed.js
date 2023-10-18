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
                "image": "https://target.scene7.com/is/image/Target/GUEST_e695aaa6-01f6-4af5-b4b5-e96ce8092497?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Assassins Creed Valhalla",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_c5fb8c7f-e40f-43ad-8833-5561f30a379f?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Hogwarts Legacy",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_40b0e771-798b-4d5f-b425-90ede3da869e?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Psychonauts 2",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_dcb29a99-b889-4d14-b663-d86b460fa04b?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Back 4 Blood",
                "console": consoles[0]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_30c83419-eb6d-4f6c-9939-8df457b9b96f?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "God of War Ragnarok",
                "console": consoles[1]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_c7637d2c-72df-45e8-b746-96cf10d8287d?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Spider-Man: Miles Morales",
                "console": consoles[1]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_6c110700-ae27-43a9-8fac-f79576cee8de?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Ratchet & Clank: Rift Apart",
                "console": consoles[1]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_10db3e92-d3d2-48eb-8695-90358bd5f62a?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Ghost of Tsushima: Director's Cut",
                "console": consoles[1]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_e5597040-8517-4848-92c7-32e3028499aa?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Horizon Forbidden West",
                "console": consoles[1]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_d397e317-4ad8-42f6-937e-f84312b0e0cc?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "The Legend of Zelda: Breath of the Wild",
                "console": consoles[2]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_e97f4ca6-9e20-4e34-ae64-1ac42d0d394c?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Animal Crossing: New Horizons",
                "console": consoles[2]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_83f32699-98bf-49e0-903a-1eede0c034e8?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Super Smash Bros. Ultimate",
                "console": consoles[2]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_b26ea68d-b0c3-4f30-a67a-4182b17841f3?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Mario Golf: Super Rush",
                "console": consoles[2]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_01fe99f2-a024-48f3-96db-81bfc3eb74cb?wid=800&hei=800&qlt=80&fmt=webp"
            },
            {
                "name": "Splatoon 2",
                "console": consoles[2]._id,
                "image": "https://target.scene7.com/is/image/Target/GUEST_9382109e-285f-4631-adaa-225fe82754e1?wid=800&hei=800&qlt=80&fmt=webp"
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
