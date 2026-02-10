import { LightningElement } from 'lwc';

export default class QuizApp2 extends LightningElement {
    selected = {};

    myQuestions = [
        {
            id:"1",
            question: 'What is the follwoing is not a template loop?',
            answers:{
                a:"for:each",
                b:"iteraor",
                c:"map loop"
            },
            correctAnswer: "c"
               
        },
        {
            id:"2",
            question: 'What is not inside not inside lwc files?',
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer: "b"

        },
        {
            id:"3",
            question: 'Which one of the following is not a directive?',
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"

        }
    ]

    currentIndex = 0;

    get currentQuestion() {
        return this.myQuestions[this.currentIndex];
    }

    get isFirst() {
        return this.currentIndex == 0;
    }

    
    get isLast() {
        return this.currentIndex == this.myQuestions.length - 1;
    }

    previousHandler() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    nextHandler() {
        if (this.currentIndex < this.myQuestions.length - 1) {
            this.currentIndex++;
        }
    }

    isSubmitted = false;
    correctAnswers = 0;

    changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
}


    // submit logic
    submitHandler() {
        event.preventDefault();
        let correct = this.myQuestions.filter(item =>
            this.selected[item.id] === item.correctAnswer
        );

        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }






}