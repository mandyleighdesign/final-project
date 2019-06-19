export class Question {
    title: string;
    drawType: string;
    choices: Choice[];
  }
  
  export class Choice {
    title: string;
    imageUrl: string;
    // Defines your character based on choice
    summary: string;
  }
  

  // npm install ngx-bootstrap@2.0.5 --save