const score = 85;
let letterGrade;
switch (true) {
  case score >= 90:
    letterGrade = "A"
    break;
  case score >= 80:
  letterGrade = "B"
    break;
  case score >= 70:
  letterGrade = "c"
    break;
  case score >= 60:
  letterGrade = "D"
    break;
  default:
  letterGrade = "E"
}
console.log(`The letter grade is: ${letterGrade}`);