import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  goals: Quote[] = [
    new Quote(1, 'Bob Marley', 'Love is sacrificing one\'s life.', 'Chekhov', new Date(2020, 5, 6)),
    new Quote(2, 'Nelson Mandela', 'Man\'s life is brief, but yet there is no man who cannot boast\
     that there have been terrible moments in his past.', 'Chekhov', new Date(2016, 5, 6)),
    new Quote(3, 'Marting Luther King', "You can't have it all, all at once.", 'Ruth Ginsberg', new Date(2019, 5, 6)),
    new Quote(4, 'Mugabe', "All happy families are alike; each unhappy family is unhappy in its own way.", ' Leo Tolstoy , Anna Karenina', new Date(2018, 5, 6)),
    new Quote(5, 'Robert Mugabe', 'Most of the girls today can\'t jog for 5 mins and expect a guy to last for two hours.', 'Ruther', new Date(2010, 7, 6)),
    new Quote(6, 'Robert Mugabe', 'If you are ugly, you are ugly. Stop talking about inner beauty because  men don\'t walk around with X-rays to see inner beauty.', 'Luciano', new Date(2011, 9, 2))

  ];
  quotes: any;
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}