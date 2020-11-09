export class Quote {
  public showDescription: boolean;
  unlike: number;
  like: number;
  constructor(public id: number,public name: string,public description: string,public author: string,public completeDate: Date){
    this.showDescription=false;
    this.unlike = 0;
    this.like = 0;
  }
}