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

console.log(news);
