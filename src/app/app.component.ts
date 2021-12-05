import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Please enter a name';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }

  onInput(value: string) {
    this.newMemberName = value;
  }

  onAddNumberOfTeam(value: string) {
    this.numberOfTeams = Number(value);
  }

  onGenerateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }
    const allMembers = [...this.members];
    while (allMembers.length > 0) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomX = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomX, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.numberOfTeams = '';
  }
}
