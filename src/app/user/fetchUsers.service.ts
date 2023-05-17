import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "./types/user";
import {Injectable} from "@angular/core";

@Injectable()
export class FetchUsersService{
  constructor(private readonly http:HttpClient) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}
