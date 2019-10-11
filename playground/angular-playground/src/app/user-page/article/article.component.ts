import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public post: any[] = [
    {
      fistName: "Matt",
      lastName: "Chenoweth",
      profilePicture: "https://i.imgur.com/z8O2Af0b.jpg",
      title: "Well today was awful",
      content: "lkjdslkfsd dkfsdm dsn vk n mn mn djjfkasjdkas sakj cx cbvjdsksv mzxv!!!",
      date: '4/13/32',
      img_url: "https://i.imgur.com/z8O2Af0b.jpg",
    },
    {
      fistName: "Steffen",
      lastName: "Shannon",
      profilePicture: "https://i.imgur.com/z8O2Af0b.jpg",
      title: "My dog ran away today",
      content: "lkjdslkfsd dkfsdm dsn vk n mn mn djjfkasjdkas sakj cx cbvjdsksv mzxv!!!",
      img_url: "https://i.imgur.com/z8O2Af0b.jpg",
      date: '3/1/98'
    },
    {
      fistName: "Patsy",
      lastName: "Shannon",
      profilePicture: "https://i.imgur.com/z8O2Af0b.jpg",
      title: "On my way to church",
      content: "lkjdslkfsd dkfsdm dsn vk n mn mn djjfkasjdkas sakj cx cbvjdsksv mzxv!!!",
      img_url: "https://i.imgur.com/z8O2Af0b.jpg",
      date: '8/44/23'
    },


  ]




  constructor() { }

  ngOnInit() {
  }

}
