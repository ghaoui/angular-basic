import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private fb: FacebookService) { 
    const params: InitParams = {
      appId: '1911682335706296',
      xfbml: true,
      version: 'v2.8'
    };
  
    fb.init(params);
  }

  ngOnInit(): void {
    this.fb.login().then((response: any) => {
      console.log(response);
      this.fb.api(`/809573769071018?fields=access_token&access_token=${response.authResponse.accessToken}`, 'get',  {
        scope: 'pages_read_engagement',
        return_scopes: true
      }).then(res => {
        console.log(res);
      }
      );
    });

    
  }

}
