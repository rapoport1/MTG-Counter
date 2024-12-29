document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const playerCount = localStorage.getItem('playerCount') || 1;
    const colors = ['#8B0000', '#006400', '#00008B', '#8B8B00', '#8B008B', '#008B8B']; // Darker colors

    if (parseInt(playerCount) === 3) {
        container.style.gridTemplateColumns = '1fr 1fr';
        container.style.gridTemplateRows = '1fr 1fr';
    } else if (parseInt(playerCount) === 5) {
        container.style.gridTemplateColumns = '1fr 1fr 1fr';
        container.style.gridTemplateRows = '1fr 1fr';
    } else {
        container.style.gridTemplateColumns = getGridColumns(playerCount);
        container.style.gridTemplateRows = getGridRows(playerCount);
    }

    for (let i = 1; i <= playerCount; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.style.backgroundColor = colors[i - 1];

        if (parseInt(playerCount) === 3 && i === 3) {
            playerDiv.style.gridColumn = 'span 2';
        } else if (parseInt(playerCount) === 5 && i === 3) {
            playerDiv.style.gridRow = 'span 2';
        }

        const lifeTotal = document.createElement('div');
        lifeTotal.className = 'life-total';
        lifeTotal.textContent = 40;
        lifeTotal.id = `player-${i}-life`;

        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => adjustLife(i, 1);

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => adjustLife(i, -1);

        playerDiv.appendChild(increaseButton);
        playerDiv.appendChild(lifeTotal);
        playerDiv.appendChild(decreaseButton);

        container.appendChild(playerDiv);
    }
});

function getGridColumns(playerCount) {
    switch (parseInt(playerCount)) {
        case 1:
            return '1fr';
        case 2:
            return '1fr 1fr';
        case 3:
            return '1fr 1fr';
        case 4:
            return '1fr 1fr';
        case 5:
        case 6:
            return '1fr 1fr 1fr';
        default:
            return '1fr';
    }
}

function getGridRows(playerCount) {
    switch (parseInt(playerCount)) {
        case 1:
            return '1fr';
        case 2:
            return '1fr';
        case 3:
            return '1fr 1fr';
        case 4:
            return '1fr 1fr';
        case 5:
        case 6:
            return '1fr 1fr';
        default:
            return '1fr';
    }
}

function adjustLife(player, amount) {
    const lifeTotal = document.getElementById(`player-${player}-life`);
    let currentLife = parseInt(lifeTotal.textContent);
    currentLife += amount;
    lifeTotal.textContent = currentLife;
}