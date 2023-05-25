import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  display=true;
  totalClicks=0;
  currentClicks=0;
  countDisplay=false;

  togglePara(num:number){
    num=num+1;
    this.totalClicks=num;

    this.currentClicks=num;

    this.display=!this.display;

    if(this.totalClicks>=1)
    this.countDisplay=true;
    

}
}