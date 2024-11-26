import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent {

  //articleForm!: FormGroup;
  article:any;
  id: any;
  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
      //this.route.queryParamMap.subscribe(params => {
      //this.id = params['id'];

      const routeParams = this.route.snapshot.paramMap;
      this.id = Number(routeParams.get('id'));

      this.articleService.findArticle(this.id).subscribe(
        (article) => {
          this.article = article;
          this.articleForm = new FormGroup({
            title: new FormControl(this.article.title),
            body: new FormControl(this.article.body),
            author: new FormControl(this.article.author),
          });
        }
      )
    };

    onSubmit() {
      this.articleService.updateArticle(this.articleForm.value, this.id).subscribe(
        (article) => {
          console.log('Article ' + this.id + ' has been updated!');
        }
      )
      console.log(this.articleForm.value);
    }
 
}
