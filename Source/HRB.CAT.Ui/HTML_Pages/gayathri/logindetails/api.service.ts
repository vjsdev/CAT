import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://www.server.com/api/";

  constructor(private httpClient: HttpClient) {}

  public sendUserMailID(user: User) {
    return this.httpClient.post(`${this.apiURL}/login/`, user);
  }
}
