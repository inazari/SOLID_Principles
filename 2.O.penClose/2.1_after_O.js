function printQuiz(questions) {
    questions.forEach(questions => {
        console.log(questions.descriptions);
        questions.printQuestionChoices();
        console.log('');
    })
}

const questions = [
    new MultipleChoiceQuestion('What is your favorite language?',
        ['CSS', 'HTML', 'JS', 'Python']
    ),
    new BooleanQuestion('this video is useful.'),
    new TextQuestion('Describe your favorite JS feature.')
]

printQuiz(questions)

class BooleanQuestion {
    constructor(descriptions) {
        this.descriptions = descriptions;
    }

    printQuestionChoices() {
        console.log('1 True');
        console.log('2 False');
    }
}

class MultipleChoiceQuestion {
    constructor(descriptions, options) {
        this.descriptions = descriptions;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion {
    constructor(descriptions) {
        this.descriptions = descriptions;
    }

    printQuestionChoices() {
        console.log('Answer: ____________');
    }
}
