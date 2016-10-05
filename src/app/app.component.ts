import { Component } from '@angular/core';

import * as elasticsearch from 'elasticsearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private _client: elasticsearch.ClientInterface

  constructor() {
    this._client = elasticsearch.Client();
  }
}
