import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLAPI } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // récupérer tous les messages
  public GetAllNews(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${URLAPI}/Posts`)
      //.pipe(catchError(error => this.handleError(error)));
  }

  // ajouter un message
  public PostNew(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${URLAPI}/Posts`, post)
      //.pipe(catchError(error => this.handleError(error)));
  }

  // récupérer un message
  public GetNew(postID: number): Observable<any> {
    return this.httpClient.get<any>(`${URLAPI}/posts/${postID}`)
      //.pipe(catchError(error => this.handleError(error)));
  }

  // voter pour un message
  public PutNew(postID: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${URLAPI}/Posts/${postID}/upvote`, post)
      //.pipe(catchError(error => this.handleError(error)));
  }
 
// ajouter un commentaire
public PostComment(postID: number, comment: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders(
    { 
       'Content-Type': 'application/json'
    })
}
  let comments = {
    body: comment.body,
    author: comment.author,
  }


  return this.httpClient.post(`${URLAPI}/posts/${postID}/comments`, comments)
    .pipe(catchError(error => this.handleError(error)));
}
  // HANDLE ERROR
  private handleError(error: any): Promise<any> {
    console.error('News Services: An error occurred', error);
    return Promise.reject(error);
  }
}
