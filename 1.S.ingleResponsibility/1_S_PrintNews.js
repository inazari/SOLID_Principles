export default class PrintNews {
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
