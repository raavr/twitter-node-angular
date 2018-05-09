//based on https://github.com/ashwin-sureshkumar/angular-infinite-scroller/blob/master/src/app/infinite-scroller.directive.ts
import { Directive, AfterViewInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription, fromEvent, of, Subject } from 'rxjs';
import { switchMap, pairwise, map, exhaustMap, filter, startWith, takeUntil } from 'rxjs/operators';

interface ScrollPosition {
  elemBottom: number;
  scrollTop: number;
  windowHeight: number;
};

interface CallbackThreshold {
  min: number;
  max: number;
}

const DEFAULT_THRESHOLD: CallbackThreshold = {
  min: 10,
  max: 200
}

@Directive({
  selector: '[app-infinite-scroller]'
})
export class InfiniteScrollerDirective implements OnDestroy {

    @Input() scrollCallback;
    private unsubscribe$ = new Subject();

    constructor(private elm: ElementRef) { }
  
    ngAfterViewInit() { 
      this.streamScrollEvents();
    }
    
    private streamScrollEvents() {
      fromEvent(window, 'scroll').pipe(
        map((e): ScrollPosition => ({
            elemBottom: this.elm.nativeElement.getBoundingClientRect().bottom,
            scrollTop: window.pageYOffset,
            windowHeight: window.innerHeight
          })
        ),
        pairwise(),
        filter(positions => this.isScrollingDown(positions) && this.isScrollExpectedPosition(positions[1])),
        exhaustMap(() => this.scrollCallback()),
        takeUntil(this.unsubscribe$)
      ).subscribe();
    }
    
    private isScrollingDown = (positions: Array<ScrollPosition>) => {
      return positions[0].scrollTop < positions[1].scrollTop;
    }
  
    private isScrollExpectedPosition = (position: ScrollPosition) => {
      const diff = position.windowHeight - position.elemBottom;
      return diff >= DEFAULT_THRESHOLD.min && diff < DEFAULT_THRESHOLD.max;
    }

    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  
}
