import { Component, OnInit } from '@angular/core';

import * as elasticsearch from 'elasticsearch';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private _client: elasticsearch.Client

  constructor() {
    this._client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }

  ngOnInit() {
    $('h1').text('jquery and elasticsearch libs work!');

    this._client.ping({
      requestTimeout: 30000,
      // undocumented params are appended to the query string
      hello: "elasticsearch"
    }, function (error) {
      if (error) {
        console.error('elasticsearch cluster is down!');
      } else {
        console.log('All is well');
      }
    });
  }
}
