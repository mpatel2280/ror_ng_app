import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss']
})
export class CreatearticleComponent {

  articles:any;

  constructor(private articleService: ArticleService) {

  }
  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });

  onSubmit() {
    this.articleService.addArticle(this.articleForm.value).subscribe(
      article => {
        this.articles = article
        console.log(this.articles);
      }
    )
    console.log(this.articleForm.value);
  }
}
