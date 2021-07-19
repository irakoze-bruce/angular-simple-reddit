import { Article } from './article.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article:Article

  
  // votes!:number
  // title!:string
  // link!:string


  constructor() {
    // this.title='Angular 2'
    // this.link="http://angular.com"
    // this.votes=10

    this.article= new Article('angular','http://angular.io',0)
   }

   voteUp(){
     this.article.voteUp()
     return false
   }

   voteDown(){
     this.article.voteDown()
     return false
   }

  ngOnInit(): void {
  }

}
