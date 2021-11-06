import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() value: any;
  @Input() label: any;
  @Input() max: any;
  @Output() progressClick = new EventEmitter();

  onClick() {
    this.progressClick.emit(this.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
