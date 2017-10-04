import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Assigenmen_array = []; 
  new_Assignment: Assignment = {
    assignementName:null,
    pointsScored:null,
    pointsPossible:null,
  } 
  totalPoints : number = 0;
  pointsPossible: number = 0;
  outputPercent =null;
  letterGrade = "A"; 
  pushAssignment(){
    var percent = this.new_Assignment.pointsScored / this.new_Assignment.pointsPossible *100;
    this.Assigenmen_array.push({
      assignementName: this.new_Assignment.assignementName,
      pointsScored: this.new_Assignment.pointsScored,
      pointsPossible: this.new_Assignment.pointsPossible,
      percent: percent,
    });
    this.totalPoints += this.new_Assignment.pointsScored;
    this.pointsPossible +=  this.new_Assignment.pointsPossible;
    var avrgPercent = this.totalPoints / this.pointsPossible * 100;
    this.outputPercent = avrgPercent.toFixed(0);
    this.determineLetterGrade();
    this.resetAssignmentFields();

  }
  resetAssignmentFields(){
    this.new_Assignment.assignementName = '';
    this.new_Assignment.pointsScored = null;
    this.new_Assignment.pointsPossible = null;
  }
  determineLetterGrade(){
    if(this.outputPercent < 60){
      this.letterGrade ='F';
    }else if(this.outputPercent >= 60 && this.outputPercent < 69){
      this.letterGrade = 'D';
    }else if(this.outputPercent >= 70 && this.outputPercent < 79){
      this.letterGrade = 'C';
    }else if(this.outputPercent >= 80 && this.outputPercent < 89){
      this.letterGrade = 'B';
    }else{
      this.letterGrade = 'A';
    }
  } 


  
}
export class Assignment{
  assignementName: any;
  pointsScored:number;
  pointsPossible:number;
}

