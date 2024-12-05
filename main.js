fetch('./db.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ', Error);
        }
        return response.json(); // Parse as JSON
    })
    .then(data => {
        const tournamentContainer = document.getElementById('tournament-container');
        const tournamentInfo = document.querySelector('.tournament-info'); // Select the tournament-info div

        if (data.tournaments && Array.isArray(data.tournaments)) {
            data.tournaments.forEach(tournament => {
                const tournamentDiv = document.createElement('div');
                tournamentDiv.className = 'tournament';
                tournamentDiv.innerHTML = `
                    <h3>${tournament.name || 'Unknown Tournament'}</h3>
                    <p>Start Date: ${tournament.starting_date || 'N/A'}</p>
                    <p>End Date: ${tournament.ending_date || 'N/A'}</p>
                `;

                // Add click event listener to each tournament div
                tournamentDiv.addEventListener('click', () => {
                    tournamentInfo.innerHTML = `
                        <h3>${tournament.name || 'Unknown Tournament'}</h3>
                        <p><strong>Description:</strong> ${tournament.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                        <p><strong>Game:</strong> ${tournament.game || 'Unknown Game'}</p>
                        <p><strong>Prize Pool:</strong> $${tournament.prize_pool || 0}</p>
                        <button class="subscribe-button">Subscribe</button>
                    `;
                });

                tournamentContainer.appendChild(tournamentDiv);
            });
        } else {
            console.error('Invalid or empty tournaments data');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });