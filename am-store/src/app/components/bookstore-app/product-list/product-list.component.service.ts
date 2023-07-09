import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Book } from "./model/book";

@Injectable()

export default class BooksService {

    private url = "https://sheet.best/api/sheets/a2a525bb-4928-481b-85ff-ad3172586115";

    httpOptions= {
        Headers: new HttpHeaders({ 'content-tipy':'application/json'})
    }

    constructor(private http:HttpClient) {}
    
    getBook(){

        return this.http.get(this.url)
    }
}