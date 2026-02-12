import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';


export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false
    openedCards =[]
    matchedCard = []
    moves = 0
    totalTime = '00:00'
    timerRef
    showCongratulations = false

    cards = [
        
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'},
    ]   

    get gameRating(){
        let stars = [1,2,3];
        if(this.moves > 12 && this.moves <= 18) {
            stars = [1,2];
        } else if (this.moves > 18) {
            stars = [1];
        }

        return this.matchedCard.length === 16 ? stars : []
    }
    
    displayCard(event){
        let currCard = event.currentTarget


        currCard.classList.add("open", "show", "disabled")
        this.openedCards = this.openedCards.concat(event.currentTarget)
        const len = this.openedCards.length
        if(len === 2){
            this.moves = this.moves + 1
            if(this.moves === 1){
                this.timer()
            }
            let type0 = this.openedCards[0].getAttribute('type');
            let type1 = this.openedCards[1].getAttribute('type');

            if(type0 === type1){
                this.matchedCard = this.matchedCard.concat(this.openedCards[0], this.openedCards[1])
                this.matched()
            } else {
                this.unmatched()
            }

        }
    }


    matched(){
        this.openedCards[0].classList.add("match", "disabled")
        this.openedCards[1].classList.add("match", "disabled")

        this.openedCards[0].classList.remove("show", "open")
        this.openedCards[1].classList.remove("show", "open")
        this.openedCards = []
        if(this.matchedCard.length === 16){
            window.clearInterval(this.timerRef)
            this.showCongratulations = true
        }
    }

    unmatched(){
        this.openedCards[0].classList.add("unmatched")
        this.openedCards[1].classList.add("unmatched")
        this.action('DISABLE')
        setTimeout(()=>{
            this.openedCards[0].classList.remove("show", "open", "unmatched")
            this.openedCards[1].classList.remove("show", "open", "unmatched")
            this.action('ENABLE')
            this.openedCards=[]
        },1100)
      }
    
    action(action){
        let cards = this.template.querySelectorAll('.card')
        Array.from(cards).forEach(item=>{
            if(action === 'ENABLE'){
                let isMatch = item.classList.contains('match')
                if(!isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled')
            }
        })
    }

    timer(){
          let startTime = new Date()
          this.timerRef = setInterval(()=>{
            let diff = new Date().getTime() - startTime.getTime() // in milli seconds
            let d = Math.floor(diff/1000) // converts into seconds
            const m = Math.floor(d % 3600 / 60); // convet to min
            const s = Math.floor(d % 3600 % 60); // convet to sec
            const mDisplay = m>0 ? m+(m===1? "minute, ":" minutes, "):""
            const sDisplay = s>0 ? s+(s===1? "second":" seconds"):""
            this.totalTime = mDisplay + sDisplay
          }, 1000)
      }


    shuffle(){
        this.showCongratulations = false
        this.openedCards =[]
        this.matchedCard = []
        this.moves = 0
        this.totalTime = '00:00'
        window.clearInterval(this.timerRef)

        let elem = this.template.querySelectorAll('.card')
        Array.from(elem).forEach(item=>{
            item.classList.remove("show","open","match","disabled")
        })

        // shuffling and swapping logi c
        let array = [...this.cards]
        let counter = array.length
        while(counter > 0){
            let index = Math.floor(Math.random()*counter)
            counter--;

            let temp = array[counter]
            array[counter] = array[index]
            array[index] = temp
        }

        this.cards = [...array]

    }




    
    renderedCallback(){
        
        if(this.isLibLoaded){
            return
        } else {
            console.log("loaded before new")
            loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("loaded successfully new")
                this.isLibLoaded = true
            }).catch(error =>{
                console.log(error)
            }) 
        }
    }

}
