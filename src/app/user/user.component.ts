import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FetchUsersService} from "./fetchUsers.service";
import {Users} from "./types/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  providers:[FetchUsersService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data:Users[]|null=[]
  isLoading=false

  constructor(private readonly fetchUsersService:FetchUsersService) {

  }

  fetchUsers(){
    this.data=null
    setTimeout(()=>{
      this.isLoading=true
      this.fetchUsersService.getUsers().subscribe((data:any)=>{
        this.data=data
        this.isLoading=false
      },error => {
        console.log(error)
        this.isLoading=false
      })
    },2000)

  }
}
