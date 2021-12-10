import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { create } from '../../actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'age', 'designation', 'actions'];
  dataSource: any[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {}

  openDialog(data?: any) {}

  deleteUser(id: string) {
    console.log(id);
  }
  createUser() {
    this.store.dispatch(create({ name: 'test', age: 38, designation: 'test' }));
  }
}
