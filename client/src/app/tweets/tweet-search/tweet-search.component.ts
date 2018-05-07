import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-tweet-search',
  templateUrl: './tweet-search.component.html',
  styleUrls: ['./tweet-search.component.scss']
})
export class TweetSearchComponent implements OnInit {

  @ViewChild('searchInput') 
  private searchInput: ElementRef;
  
  @Output() 
  onSearchTermsChanged = new EventEmitter<string>();
  
  private searchTerms$ = new Subject<string>();

  search(name: string) {
    this.searchTerms$.next(name);
  }

  ngOnInit() {  
    this.searchTerms$
      .asObservable()
      .pipe(
        debounceTime(500), 
        distinctUntilChanged(),
        filter(value => value !== "")
      ).subscribe(
        (value) => this.onSearchTermsChanged.emit(value)
      );
  }

  ngAfterViewInit() {
    const firstValue = this.searchInput.nativeElement.value;
    this.search(firstValue);
  }

}
