import { Injectable } from '@angular/core';
import {Assignment} from './assignment';

@Injectable()
export class PushAssignmentService {

  constructor() { }
  assignmentArray = [];
  push(assignementName:string, pointsScored:number,pointsPossible:number){
    let assignmentArray:Assignment [];
    
     let percent = pointsScored / pointsPossible;
    
    
    
    
    
    this.assignmentArray.push({
      assignementName: assignementName,
      pointsScored: pointsScored,
      pointsPossible: pointsPossible,
      percent:percent,
    });
    return this.assignmentArray;
  }

}
