import { Injectable } from '@angular/core';

@Injectable()
export class PerformanceCalcService {

  constructor() { }


  pointsEarned:number = 0;
  pointPossible:number = 0;
  percent:number = 0;
  performanceClass = {};
  updatePerformance(scored, possible ){
    this.pointsEarned += scored;
    this.pointPossible += possible;
    this.percent = this.pointsEarned / this.pointPossible;
  }
  getPerformance(){
    this.performanceClass = {
      totalPoints: this.pointsEarned,
      possiblePoints: this.pointPossible,
      percent: this.percent
    }
    return this.performanceClass;
  }

}
