import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Bethwel', 'Love is a scandal of the personal sort.', 'Chekhov', new Date(2020, 5, 6)),
    new Quote(2,'Bethwel', 'Man\'s life is brief, but yet there is no man who cannot boast\ that there have been terrible moments in his past.', 'Chekhov', new Date(2016, 5, 6)),
    new Quote(3,'Bethwel', "You can't have it all, all at once.", 'Ruth Ginsberg', new Date(2019, 5, 6)),
    new Quote(4, 'Bethwel', "All happy families are alike; each unhappy family is unhappy in its own way.", ' Leo Tolstoy , Anna Karenina', new Date(2018, 5, 6)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  @Output() isComplete = new EventEmitter <boolean>();



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