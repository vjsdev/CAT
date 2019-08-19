import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string =
    "https://my-json-server.typicode.com/Nikunjam/trialpost/posts";
  httpOptions = {
    headers: new HttpHeaders({ contentType: "application/json" })
  };
  constructor(private httpClient: HttpClient) {}
  // `${this.apiURL}/posts/`
  public sendUserMailID(user: User) {
    return this.httpClient.post(this.apiURL, user);
  }
  public getOtphash(): Observable<any> {
    return this.httpClient.get(this.apiURL);
  }
}
