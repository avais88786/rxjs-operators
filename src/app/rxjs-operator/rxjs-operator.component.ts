import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';
import { User } from '../models/User';
import { Users } from '../models/Users';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.css']
})
export class RxjsOperatorsComponent implements OnInit, AfterViewInit {
  
  singleUser : User = new User();
  allUsers : Users = new Users();
  constructor(private apiService : ApiCallerService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.apiService.getUser(2).subscribe(user => {
      this.singleUser = user;
    });

    this.apiService.getUsers(2).subscribe(users => {
      this.allUsers = users;
    });
  }

  

}
