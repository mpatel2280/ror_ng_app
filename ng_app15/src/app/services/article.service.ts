import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { 

  }

  listArticle() {
    return this.http.get(this.url+'/api/v1/articles');
  }

  addArticle(data:any) {
    console.log('addArticle====>', data)
    return this.http.post(this.url+'/api/v1/articles', data, this.httpOptions);
  }

  findArticle() {
    
  }

  updateArticle() {
    
  }

  deleteArticle(id:any) {
    return this.http.delete(this.url+'/api/v1/articles/'+id);
  }
}
