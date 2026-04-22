const albums = [
    { name: "Top Hits", desc: "Global favorites", img: "https://seed-mix-images.remix.viinyl.com/v1/img/aria/user/default/en/default.png" },
    { name: "Peaceful Piano", desc: "Relaxing music", img: "https://i.scdn.co/image/ab67706f00000002ca5a751711e745674991195a" }
];

const cardContainer = document.getElementById('cardContainer');

// Function to create and inject cards
function loadAlbums() {
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${album.img}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p style="color: #b3b3b3; font-size: 14px; margin-top: 5px;">${album.desc}</p>
        `;
        
        card.addEventListener('click', () => {
            alert(`Now playing: ${album.name}`);
        });
        
        cardContainer.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadAlbums);