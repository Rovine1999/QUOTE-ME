export class Quote {
  public showDescription: boolean;
  unlike: any;
  like: any;
  constructor(public id: number,public name: string,public description: string,public author: string,public completeDate: Date){
    this.showDescription=false;
    this.unlike = 0;
    this.like = 0;
  }
}