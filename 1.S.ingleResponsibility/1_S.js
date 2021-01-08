import PrintNews from "./1_S_PrintNews";

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

const news = new News('title name', 'some text here');
const printNews = new PrintNews(news);

console.log(printNews.json());
console.log(printNews.xml());
console.log(printNews.html());
