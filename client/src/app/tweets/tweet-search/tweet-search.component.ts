import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tweet-search',
  templateUrl: './tweet-search.component.html',
  styleUrls: ['./tweet-search.component.scss']
})
export class TweetSearchComponent implements OnInit, OnDestroy {

  @ViewChild('searchInput') 
  private searchInput: ElementRef;
  
  @Output() 
  onSearchTermsChanged = new EventEmitter<string>();
  
  private searchTerms$ = new Subject<string>();
  private unsubscribe$ = new Subject();

  search(name: string) {
    this.searchTerms$.next(name);
  }

  ngOnInit() {  
    this.searchTerms$
      .asObservable()
      .pipe(
        debounceTime(500), 
        distinctUntilChanged(),
        filter(value => value !== ""),
        takeUntil(this.unsubscribe$)
      ).subscribe(
        (value) => this.onSearchTermsChanged.emit(value)
      );
  }

  ngAfterViewInit() {
    const firstValue = this.searchInput.nativeElement.value;
    this.search(firstValue);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
