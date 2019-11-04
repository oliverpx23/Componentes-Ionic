import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll,{static: true}) infScr: IonInfiniteScroll;

  data = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(e:any) {
    setTimeout(() => {

      if(this.data.length > 50) {
        e.target.complete();
        this.infScr.disabled = true;
        return;
      }

      const nArr = Array(20);
      this.data.push(...nArr);
      e.target.complete();
    }, 1000);
  }

}
