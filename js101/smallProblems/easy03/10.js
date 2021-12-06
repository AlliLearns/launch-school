// Write a function that takes a year as input
// and returns the century. The return value should
// be a string that begins with the century number 
// and ends with `'st'`, `'nd'`, `'rd'` or `'th'` as 
// appropriate for that number. New centuries begin
// in years that end with `01`. So, the years 
// `1901 - 2000` comprise the 20th century. 

/*
  INPUT   number
  OUTPUT  string
  RULES
  DATA
  ALGORITHM
    - declare a variable `suffix` and give it an array of each postfix value 
    - function century(year)
      - 
      - console.log(formatCentury(century))

    - function formatCentury(century)
      - centuryStr = century.toString();
      - lastDigit = Number(centuryStr[centuryStr.length - 1]);
      - switch ()
*/


function century(year) {
  const century = Math.ceil(year / 100);
  console.log(formatCentury(century));
}

function formatCentury(century) {
  if (catchWithTh(century % 100)) return `${century}th`;

  const lastDigit = century % 10;
  switch (lastDigit) {
    case 1:  return `${century}st`;
    case 2:  return `${century}nd`;
    case 3:  return `${century}rd`;
    default: return `${century}th`;
  }
}

function catchWithTh(lastTwo) {
  const exceptions = [11, 12, 13];
  return exceptions.includes(lastTwo);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"