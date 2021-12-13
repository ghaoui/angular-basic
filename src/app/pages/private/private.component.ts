import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

import { User } from '../../model/user.model';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  @ViewChild('avatarButton') avatarButton: ElementRef | undefined;
  @ViewChild('card') card: ElementRef | undefined;
  displayProfile: boolean = false;
  user: any = {
    src: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Cry&eyebrowType=Angry&mouthType=ScreamOpen&skinColor=DarkBrown',
  };
  constructor(
    private router: Router,
    private usersService: UsersService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (event) => {
      console.log(event);
      console.log(this.avatarButton);
      if (
        event.target !== this.avatarButton?.nativeElement &&
        event.target !== this.card?.nativeElement
      ) {
        this.displayProfile = false;
      }
    });
  }

  ngOnInit(): void {
    this.usersService.me().subscribe((user) => {
      this.user = user;
    });
  }
  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
  onDisplayProfile(): void {
    this.displayProfile = !this.displayProfile;
  }
}
