import { Component } from '@angular/core';
import {PushAssignmentService} from './push-assignment.service';
import {PerformanceCalcService} from './performance-calc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Assigenmen_array = []; 
  new_Assignment = {
    assignementName:null,
    pointsScored:null,
    pointsPossible:null,
  } 
  performanceClass = {};

  constructor(private pushAssignmentServ: PushAssignmentService, private performance: PerformanceCalcService){}
  pushAssignment(){
    this.Assigenmen_array = this.pushAssignmentServ.push(this.new_Assignment.assignementName,this.new_Assignment.pointsScored,this.new_Assignment.pointsPossible);
    this.performance.updatePerformance(this.new_Assignment.pointsScored,this.new_Assignment.pointsPossible);
    this.performanceClass = this.performance.getPerformance();
    this.resetAssignmentFields();
  }


  resetAssignmentFields(){
    this.new_Assignment.assignementName = '';
    this.new_Assignment.pointsScored = null;
    this.new_Assignment.pointsPossible = null;
  }
}
