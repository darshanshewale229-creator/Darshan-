const API_URL = window.location.origin;

async function loadHubData() {
    try {
        const response = await fetch(`${API_URL}/api/hub-data`);
        const data = await response.json();

        // 1. Load Minecraft IP
        document.getElementById('mc-ip').innerText = data.minecraft.serverIP;
        document.getElementById('mc-version').innerText = data.minecraft.version;

        // 2. Load Discord Link
        document.getElementById('discord-btn').href = data.discord.inviteLink;

        // 3. Load Membership Tiers dynamically
        const membershipContainer = document.getElementById('membership-tiers');
        membershipContainer.innerHTML = ''; // Clear loading text
        
        data.memberships.forEach(tier => {
            const tierCard = `
                <div class="tier-card">
                    <h3>${tier.tierName}</h3>
                    <p class="price">${tier.price}</p>
                    <ul>
                        ${tier.perks.map(perk => `<li>${perk}</li>`).join('')}
                    </ul>
                </div>
            `;
            membershipContainer.innerHTML += tierCard;
        });

    } catch (error) {
        console.error("Error connecting to Trend gamer 96 backend:", error);
    }
}

// Fire it up when the page loads
loadHubData();
