const db = require('../config/connection');
const { Game } = require('../models/Game');
const gameSeeds = require('./gameSeeds.json');

// Generate console ID based on console type 
function generateConsoleId(consoleType) {
    // Predefined mapping of console types to static IDs
    const consoleIds = {
        'Xbox Series X': 'xbox123',
        'Switch': 'switch456',
        'PS5': 'ps5123'
    };

    // Return ID based on console type, or null
    return consoleIds[consoleType] || null;
}

// Event listener waiting for database connnection to open
db.once('open', async () => {
    try {
        // Clear existing games data
        await Game.deleteMany({});

        // Seed games with console IDs
        const gamesWithConsoleData = gameSeeds.map(game => {
            // Generate console ID based on console type
            const consoleId = generateConsoleId(game.consoleType);

            if (!consoleId) {
                throw new Error(`Invalid console type: ${game.consoleType}`);
            }

            // Return new updated object 
            return {
                ...game,
                console: {
                    name: game.consoleType, // Assign console type as console name
                    id: consoleId // Assign generated console ID
                }
            };
        });

        // Insert seeded games with updated console data
        const games = await Game.insertMany(gamesWithConsoleData);

        console.log('Games seeded successfully!');
    } catch (error) {
        console.error('Error seeding games:', error);
    }

    // Close db connection
    db.close();

    // Exit Node.js process
    process.exit(0);
});
