const API_URL = window.location.origin;

async function loadHubData() {
    try {
        const response = await fetch(`${API_URL}/api/hub-data`);
        const data = await response.json();

        // डेटा को HTML में सेट करना
        document.getElementById('channel-name').innerText = data.channelName;
        document.getElementById('mc-ip').innerText = data.minecraft.serverIP;
        document.getElementById('mc-version').innerText = data.minecraft.version;
        document.getElementById('discord-desc').innerText = data.discord.description;
        document.getElementById('discord-btn').href = data.discord.inviteLink;

        // मेम्बरशिप टियर्स लोड करना
        const membershipContainer = document.getElementById('membership-tiers');
        membershipContainer.innerHTML = ''; 
        
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
        console.error("Error connecting to backend:", error);
    }
}

loadHubData();
