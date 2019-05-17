import { Component, OnInit } from '@angular/core';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const username = new MDCTextField(document.querySelector('.username'));
    const password = new MDCTextField(document.querySelector('.password'));
    new MDCRipple(document.querySelector('.cancel'));
    new MDCRipple(document.querySelector('.next'));
  }

}
