import { Component, inject } from '@angular/core';
import { UtilitysService } from '../utilitys.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  _serv = inject(UtilitysService);

  byDefualtMethod(){

    this._serv.messageAlert();
  }

}
