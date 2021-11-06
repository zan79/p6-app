import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input('value') value:any;
  @Input('max') max:any;
  @Input('label') label:any;

  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.change.emit(this.value);
  }
}
