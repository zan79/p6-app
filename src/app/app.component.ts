import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p6App';

  label = 'Project Progress';
  max = 100;
  value = 75;

  onChange(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
  onClick(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
}
