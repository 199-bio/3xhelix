// Team component - handles team member display and bio toggles
function renderTeamMembers() {
    const teamGrid = document.querySelector('#architects-innovation .team-grid');
    if (!teamGrid || !siteContent.teamMembers) return;
    
    teamGrid.innerHTML = ''; // Clear placeholder
    
    siteContent.teamMembers.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-member-card', 'glass-card');
        
        // Create brief excerpt from bio
        const briefBio = member.fullBio.substring(0, 150) + '...';
        
        memberCard.innerHTML = `
            <div class="team-member-photo">
                <img src="assets/images/team-member-${index + 1}.jpg" 
                     alt="${member.name}" 
                     onerror="this.style.display='none'; this.parentElement.classList.add('no-photo'); this.parentElement.setAttribute('data-initials', '${getInitials(member.name)}')">
            </div>
            <h3>${member.name}</h3>
            <p class="title">${member.title}</p>
            <p class="bio-excerpt">${briefBio}</p>
            <button class="read-bio-btn" onclick="toggleBio(${index})">Read Full Bio</button>
            <div class="bio-full-container" id="bio-${index}" style="display: none;">
                <p class="bio-full">${member.fullBio}</p>
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

// Helper function to get initials
function getInitials(name) {
    return name
        .split(' ')
        .filter(word => word.length > 0 && word !== 'MD' && word !== 'DVM')
        .map(word => word[0])
        .join('');
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderTeamMembers };
} 