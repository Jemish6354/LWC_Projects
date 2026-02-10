import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // for storing answers
    correctAnswers = 0 // to show the number of correct answers
    isSubmitted = false // use to show the result
    myQuestions = [
        {
            id:"Question1",
            question: 'What is the follwoing is not a template loop?',
            answers:{
                a:"for:each",
                b:"iteraor",
                c:"map loop"
            },
            correctAnswer: "c"
               
        },
        {
            id:"Question2",
            question: 'What is not inside not inside lwc files?',
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer: "b"

        },
        {
            id:"Question3",
            question: 'Which one of the following is not a directive?',
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"

        }
    ]

    // use for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)

    }

    // apply dnamic styling to show result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ?
            'slds-text-color_success':'slds-text-color_error'
        }`
    }

    // change handler get's called on every click on the options
    changeHandler(event){
        // console.log("name", event.target.name)
        // console.log("value", event.target.value)
        const {name, value} = event.target
        // const name =  event.target.name
        // const value = event.target.value
        this.selected={...this.selected, [name]:value}
    }



    // form submit handler
    submitHandler(event){
        event.preventDefault()
        // this.selected = {"Question1":"a", "Question2":"b", "Question2":"a"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        // console.log("this.correctAnswers", this.correctAnswers)
        
        //return this.correctAnswers = correct.length


    }
    
    //reset handleer
    resetHandler(event){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false

    }
}