document.addEventListener("DOMContentLoaded", () => {
    const trendingContainer = document.getElementById("trendingAnimeContainer");

    async function fetchTrendingAnime() {
        try {
            const response = await fetch("https://api.consumet.org/anime/gogoanime/top-airing");
            const data = await response.json();
            displayTrendingAnime(data.results);
        } catch (error) {
            console.error("Error fetching trending anime:", error);
            trendingContainer.innerHTML = "<p>Failed to load trending anime. Try again later.</p>";
        }
    }

    function displayTrendingAnime(animeList) {
        trendingContainer.innerHTML = ""; // Clear previous content
        animeList.slice(0, 9).forEach(anime => {
            const animeCard = document.createElement("div");
            animeCard.classList.add("anime-card");

            animeCard.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <p class="anime-title">${anime.title}</p>
            `;

            trendingContainer.appendChild(animeCard);
        });
    }

    fetchTrendingAnime();
});
