function getGrade (s1, s2, s3) {
  // Code here
  let numAverage = (s1 + s2 + s3) / 3;
  if (numAverage < 60)   return 	'F';
  if (numAverage < 70)   return 	'D';
  if (numAverage < 80)   return 	'C';
  if (numAverage < 90)   return 	'B';
  if (numAverage <= 100) return 	'A';
 
 
}