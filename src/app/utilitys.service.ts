import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitysService {

  constructor() { }

  messageAlert(){
    alert('Hello, Depedency Injections Works');
  }

  userData=[
    {
      user:'Dhurv',
      password:'kh5Jf4'
    },
    {
      user:'Ankit',
      password:'ad8g4k'
    },
    {
      user:'Dhaval',
      password:'dc0el9'
    }
  ]
}
