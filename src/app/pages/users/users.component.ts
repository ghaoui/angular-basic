import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { create } from '../../actions/users.actions';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'age', 'designation', 'actions'];
  dataSource: any = [];
  constructor(
    private store: Store,
    private users: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.users.getClients().subscribe((data) => {
      this.dataSource = data;
    });
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  deleteUser(id: string) {
    console.log(id);
  }
  createUser() {
    this.store.dispatch(create({ name: 'test', age: 38, designation: 'test' }));
  }
}
