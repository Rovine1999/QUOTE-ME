import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Robert Mugabe', 'Love is a scandal of the personal sort.', 'Chekhov', new Date(2020, 5, 6)),
    new Quote(2,'Martin Luther King', 'Man\'s life is brief, but yet there is no man who cannot boast\ that there have been terrible moments in his past.', 'Chekhov', new Date(2016, 5, 6)),
    new Quote(3,'Nelson Mandela', "You can't have it all, all at once.", 'Ruth Ginsberg', new Date(2019, 5, 6)),
    new Quote(4, 'Robert Mugabe', "All happy families are alike; each unhappy family is unhappy in its own way.", ' Leo Tolstoy , Anna Karenina', new Date(2018, 5, 6)),
    new Quote(5, 'Robert Mugabe', 'Nothing makes a woman more confused than being in a relation with a broke man who is extremely good in bed', 'Rovine Wanjala', new Date(2010, 7,7)),
    new Quote(6, 'Robert Mugabe', 'Sometimes you look back at girls you spent money on, rather than send it to your Mom and you realise witchcraft is real', 'Ruthov', new Date(2011, 4, 5)),
  ];
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  like(index){
    this.quotes[index].like++;
  }
  
  unlike(index){
    this.quotes[index].unlike++;
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  @Output() isComplete = new EventEmitter <boolean>();



  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?');

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}