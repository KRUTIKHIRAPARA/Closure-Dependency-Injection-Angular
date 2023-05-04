import { Component, inject } from '@angular/core';
import { UtilitysService } from './utilitys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UtilitysService]
})
export class AppComponent {
  title = 'closure';

  allDatas:any =[];

  _utility = inject(UtilitysService);

  // constructor(private _utility: UtilitysService) {}
  

  ngOnInit(): void {
    this.allDatas = this._utility.userData;
    console.log(this.allDatas);

    this._utility.messageAlert();
  }


  m = 1;

  Outer() {
    var i = 5;

    function inner() {
      var j = 10;
      var k = j + i;
      alert(k);
    }

    (() => {
      alert(i + this.m);
    })

      ();

    inner();
  }

  passMessage() {
    return this._utility.messageAlert();
  }

}
