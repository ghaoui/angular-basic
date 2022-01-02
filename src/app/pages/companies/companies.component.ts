import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'owner', 'clients', 'actions'];
  dataSource: any = [];

  constructor(
    private router: Router,
    private users: UsersService
  ) {}
  

  ngOnInit(): void {
    this.users.getCompanies().subscribe((data) => {
      this.dataSource = data;
    });
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  deleteCompany(id: string) {
    console.log(id);
  }

}
