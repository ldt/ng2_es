import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as elasticsearch from "elasticsearch";

@Injectable()
export class ElasticSearchService {
    private _client: elasticsearch.ClientInterface;

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new elasticsearch.Client({
            host: 'http://localhost:9200',
            log: 'trace'
        });
    }

    search(value): Promise<any> {
        if (value) {
            console.log(value)
            return this._client.search({
                index: 'blog',
                q: `title:${value}`
            })
        } else {
            return Promise.resolve({})
        }
    }

    addToIndex(value): Promise<any> {
        return this._client.create(value)
    }

    isAvailable(): Promise<any> {
        return this._client.ping({
            requestTimeout: Infinity,
            hello: "elasticsearch!"
        });
    }
}