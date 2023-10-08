/*
+----------+
| STRFTIME |
+----------+
Author: https://github.com/b-coimbra
Description: silly strftime function implementation in js without the percentage notation.
             based off https://strftime.org

USAGE: new Date().strftime('H:M p - A') => 21:32 AM - Thursday
       new Date().strftime('m/b/Y')     => 1/Jan/2018
       new Date().strftime('do B Y')    => 18th January 2018
*/
function strftime(date, format = 'c') {
  const isValid = (date) => date instanceof Date && !isNaN(date);

  if (!isValid(date)) {
    throw date;
  }

  function padNumber(num, n = 2) {
    return (Array(n).join('0') + num).slice(-n);
  }

  function getOrdinal(num) {
    const numStr = num.toString();
    const lastDigit = numStr[numStr.length - 1];
    return { 1: 'st', 2: 'nd', 3: 'rd' }[lastDigit > 3 ? 0 : lastDigit] || 'th';
  }

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    result = [],
    formats = {
      a: days[date.getDay()].slice(0, 3),
      A: days[date.getDay()],
      w: date.getDay(),
      q: padNumber(date.getDay()),
      d: padNumber(date.getDate()),
      e: date.getDate(),
      b: month[date.getMonth()].slice(0, 3),
      B: month[date.getMonth()],
      m: date.getMonth() + 1,
      N: padNumber(date.getMonth() + 1),
      y: padNumber(date.getFullYear()),
      Y: date.getFullYear(),
      H: date.getHours(),
      h: padNumber(date.getHours()),
      p: date.getHours() >= 12 ? 'PM' : 'AM',
      o: getOrdinal(date.getDate()),
      M: date.getMinutes(),
      i: padNumber(date.getMinutes()),
      S: date.getSeconds(),
      s: padNumber(date.getSeconds()),
      f: date.getMilliseconds(),
      c: date.toDateString() + ' - ' + date.toTimeString(),
      x: date.toLocaleDateString(),
      X: date.toLocaleTimeString()
    };

  format.split(/(\w|.)/m).forEach((type) => {
    if (type) {
      result.push(typeof formats[type] === 'undefined' ? type : formats[type]);
    }
  });

  return result.join('');
};