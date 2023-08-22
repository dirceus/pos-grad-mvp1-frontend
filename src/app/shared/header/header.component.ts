import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  irParaGithub(){
    window.location.href="https://github.com/dirceus/pos-grad-mvp1-frontend";
  }

  irParaSwagger(){
    window.location.href="http://localhost:5000";
  }

}
