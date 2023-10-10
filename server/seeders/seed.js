const db = require('../config/connection');
const { Game } = require('../models');
const gameSeeds = require('./gameSeeds.json'); // Sample game data

db.once('open', async () => {
    try {
        // Clear existing games data
        await Game.deleteMany({});

        // Seed games
        const games = await Game.insertMany(gameSeeds);
        console.log('Games seeded successfully!');
    } catch (error) {
        console.error('Error seeding games:', error);
    }

    // Close db connecton
    db.close();
    process.exit(0);
});