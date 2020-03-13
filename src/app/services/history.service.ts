import { Injectable } from '@angular/core';
import { History } from './../models/history';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  HOME_URL='http://localhost:3000/';
  historys: Observable<History[]>;
  history:Observable<History>;

  constructor(private http: HttpClient) { }

  addHistory(history: History) {
    debugger
    const url = this.HOME_URL + 'historys';
    return this.http.post(url, history)
  }

  getHistorys(): Observable<History[]> {
    this.historys = this.http.get<History[]>(this.HOME_URL + 'historys');
    return this.historys;
  }

  getHistoryById(id): Observable<History> {
    this.history = this.http.get<History>(this.HOME_URL + 'historys/'+id);
    return this.history;
  }

  updateHistory(history) {
    const url = this.HOME_URL + 'historys/' + history.id;
    return this.http.put(url, this.history)
  }

  deleteHistory(history) {
    const url = this.HOME_URL + 'historys/' + history.id;
    return this.http.delete(url)
  }
}
