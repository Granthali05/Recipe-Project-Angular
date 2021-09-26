import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoadedString='shopping-list';
  title = 'Project';
  onNavigate(feature:string){
    this.LoadedString=feature;
  }
}
