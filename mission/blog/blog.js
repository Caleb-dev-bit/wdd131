const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const reviewsSection = document.querySelector('.reviews');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('review');

        articleElement.innerHTML = `
            <div class="article-details">
                <p><strong>Published:</strong> ${article.date}</p>
                <p><strong>Age Group:</strong> ${article.ages}</p>
                <p><strong>Genre:</strong> ${article.genre}</p>
                <p><strong>Rating:</strong> ${article.stars}</p>
            </div>

            <div class="article-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description}</p>
            </div>
        `;

        reviewsSection.appendChild(articleElement);
    });
});
