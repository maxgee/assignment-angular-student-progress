import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterGrade'
})
export class LetterGradePipe implements PipeTransform {

  transform(value: any, args?: any): any {

   if(value >= .90){
    return "A";
   }else if(value >= .80){
     return "B";
   }else if(value >= .70){
    return "C";
   }else if(value >= .60){
     return "D";
   }else{
     return "F";
   }


  }
}
