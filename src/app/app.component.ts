import { Component } from '@angular/core';
import { Ranger } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ranger1;
  ranger2;

  constructor() {
    this.ranger1 = new Ranger(100, 0, '');
    this.ranger2 = new Ranger(100, 0, '');
  }
  public generateRanger1(health: number, power: number, nickname: string) {
    this.ranger1.setConfig(nickname, power, health);
  }
  public generateRanger2(health: number, power: number, nickname: string) {
    this.ranger2.setConfig(nickname, power, health);
  }
  public fight() {
    if (this.ranger1.nickname && this.ranger2.nickname) {
      Ranger.fight(this.ranger1, this.ranger2);
    } else alert('First create Rangers please');
  }

  public stop() {
    if (this.ranger1.nickname && this.ranger2.nickname) {
      setTimeout(() => {
        Ranger.stop(this.ranger1, this.ranger2);
      }, 3000);
    } else alert('First create Rangers please');
  }

}