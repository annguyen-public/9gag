const NineGag = require('9gag');
const Scraper = NineGag.Scraper;

async function memes() {
    const scraper = new Scraper(10);
    try {
        const posts = await scraper.scrap();
        posts.forEach(post => console.log(`${post.title} -> ${post.content}`));
    }
    catch (err) {
        console.error(err);
    }
}

memes();