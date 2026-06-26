const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Serve Frontend Static Files
app.use(express.static(path.join(__dirname, '../frontend')));

// THE BRAIN: Combined API for Trend gamer 96
app.get('/api/hub-data', (req, res) => {
    res.json({
        channelName: "Trend gamer 96",
        discord: {
            inviteLink: "https://discord.gg/YOUR_DISCORD_INVITE_HERE",
            description: "Join the squad on Discord to chat, get stream alerts, and hang out!"
        },
        minecraft: {
            serverIP: "play.trendgamer96.com", // Replace with your actual server IP
            version: "1.20.4 (Java/Bedrock)",
            status: "Online" // You can make this dynamic later!
        },
        memberships: [
            {
                tierName: "Bronze Gamer",
                price: "$1.99/mo",
                perks: ["Loyalty badges", "Custom emojis in chat", "Member-only community posts"]
            },
            {
                tierName: "Gold VIP",
                price: "$4.99/mo",
                perks: ["Priority queue on the Minecraft server", "Exclusive Discord role", "All lower perks"]
            },
            {
                tierName: "Immortal Legend",
                price: "$9.99/mo",
                perks: ["Play games directly with me on stream", "Shoutouts in videos", "All lower perks"]
            }
        ]
    });
});

// Start the Hub Server
app.listen(PORT, () => {
    console.log(`🎮 Trend gamer 96 Hub running smoothly on port ${PORT}`);
});

