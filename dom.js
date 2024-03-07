const getSleepHours = day => {
    if (day === 'Monday') {
        return 8;
      } 
      else if (day === 'Tuesday') {
        return 7;
      }
     else if (day === 'Wednesday') {
        return 6;
      }
     else if (day === 'Thursday') {
        return 5;
      }
     else if (day === 'Friday') {
        return 4;
      }
     else if (day === 'Saturday') {
        return 3;
      }
     else if (day === 'Sunday') {
        return 2;
      }
    
};
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
const getIdealSleepHours = () => {
    const idealHours = 6.5;
    return idealHours * 7;

    const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
    const getIdealSleepHours = idealHours => idealHours * 7;
    const calculateSleepDebt = () => {
    
      
        const idealSleepHours = getIdealSleepHours(8);
        
      };


  };
  console.log('The sum of all sleep hours in the week is ' + getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log('The ideal hours is ' + getIdealSleepHours()); 
  
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep');
      }
      
      else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
      }
      
      else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed');
      } else {
        console.log('You should get some rest');
      }
}
calculateSleepDebt()





