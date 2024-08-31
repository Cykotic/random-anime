(async () => {
    async function fetchAnimeTitles(pageNumber) {
        try {
            const response = await fetch(`${window.location.origin}/user/watch-list?type=3&sort=&page=${pageNumber}`);
            if (!response.ok) throw new Error(`Failed to fetch page ${pageNumber}`);
            
            const text = await response.text();
            const doc = new DOMParser().parseFromString(text, 'text/html');
            
            const animeTitles = doc.querySelectorAll('h3.film-name a.dynamic-name');
            return Array.from(animeTitles).map(a => ({
                title: a.textContent.trim(),
                url: a.href
            }));
        } catch (error) {
            return [];
        }
    }

    async function RandomAnime(totalPages) {
        const allAnimeTitles = [];

        const fetchPromises = [];
        for (let page = 1; page <= totalPages; page++) {
            fetchPromises.push(fetchAnimeTitles(page));
        }

        const results = await Promise.all(fetchPromises);

        results.forEach(titles => allAnimeTitles.push(...titles));

        const randomIndex = Math.floor(Math.random() * allAnimeTitles.length);
        const randomAnime = allAnimeTitles[randomIndex];

        console.log('Random Anime Selected:');
        console.log('Title:', randomAnime.title);
        console.log('URL:', randomAnime.url);
    }

    await RandomAnime(16); // make sure to change this number from the numbers of pages you have in "plan to watch"
})();