class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.updated = false;
    }

    update(text) {
        this.text = text;
        this.updated = true;
    }
}

class PrintNews {
    constructor(news) {
        this.news = news;
    }
    html() {
        return `<div>
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>`
    }

    json(){
        const {title, text, updated} = this.news;
        return JSON.stringify({
            title, text, updated
        }, null, 2)
    }
    xml() {
        const {title, text, updated} = this.news;
        return `<news>
                <title>${title}</title>
                <text>${text}</text>
            </news>
        `
    }
}


const news = new News('title name', 'some text here');
const printNews = new PrintNews(news);

console.log(printNews.json());
console.log(printNews.xml());
console.log(printNews.html());
