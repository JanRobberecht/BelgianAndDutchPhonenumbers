import { phones1 } from './module.js';
import { phones2 } from './module.js';


/* TEST 1 NUMBER */
/*
console.log(cleanUpNumber("32/04jlljlk   **- 8650fff5050"));
*/

/* TEST 03 or 051 NUMBERS */

phones2.forEach((e) => {
  console.log(cleanUpNumber(e))
})


function cleanUpNumber(e) {

  var textNumber = String(e);
  var n;

  if (textNumber.charAt(0) == "+") {
    let remainingChars = textNumber.slice(1);
    n = "+" + remainingChars.replace(/\D+/g, '');
  } else {
    n = textNumber.replace(/\D+/g, '');
  }

  return evaluatePhone(n);

}


function evaluatePhone(n) {

  var temp;

  if (n == "") {
    return n;

  } else if (n.length == 8) {

    temp = "0" + n;
    return formatBelgianLandline(temp);

  } else if (n.length == 9) {

    if (n.charAt(0) == 0) {

      temp = n;
      return formatBelgianLandline(temp);

    } else if (n.charAt(0) == 4) {

      temp = "0" + n;
      return formatBelgianMobile(temp);

    } else if (n.charAt(0) == 6) {

      temp = "+31" + n;
      return formatDutchPhone(temp);

    } else {
      return n;
    }


  } else if (n.length == 10) {

    if (n.slice(0, 2) == "04") {

      temp = n;
      return formatBelgianMobile(temp);

    } else if (n.slice(0, 2) == "06") {

      temp = "+31" + n.slice(1, 10);
      return formatDutchPhone(temp);

    } else if (n.slice(0, 2) == "32") {

      temp = "0" + n.slice(2, 10);
      return formatBelgianLandline(temp);
    
    } else {
      return n;
    }

  } else if (n.length == 11) {

    if (n.slice(0, 3) == "+32") {

      temp = "0" + n.slice(3, 11);
      return formatBelgianLandline(temp);

    } else if (n.slice(0, 2) == "31") {

      temp = "+" + n;
      return formatDutchPhone(temp);

    } else if (n.slice(0, 3) == "320") {

      temp = n.slice(2, 11);
      return formatBelgianLandline(temp);

    } else if (n.slice(0, 3) == "324") {

      temp = "0" + n.slice(2, 11);
      return formatBelgianMobile(temp);
      
    } else {
      return n;
    }

  } else if (n.length == 12) {

    if (n.slice(0, 2) == "31") {

      temp = "+31" + n.slice(3, 12);
      return formatDutchPhone(temp);

    } else if (n.slice(0, 2) == "32") {

      temp = n.slice(2, 12);
      return formatBelgianMobile(temp);

    } else if (n.slice(0, 3) == "+31") {

      temp = n;
      return formatDutchPhone(temp);

    } else if (n.slice(0, 4) == "+320") {

      temp = n.slice(3, 12);
      return formatBelgianLandline(temp);

    } else if (n.slice(0, 4) == "+324") {

      temp = "0" + n.slice(3, 12);
      return formatBelgianMobile(temp);

    } else if (n.slice(0, 4) == "0032") {

      temp = "0" + n.slice(4, 12);
      return formatBelgianLandline(temp);

    } else {
      return n;
    }

  } else if (n.length == 13) {

    if (n.slice(0, 3) == "+31") {

      temp = "+31" + n.slice(4, 13);
      return formatDutchPhone(temp);

    } else if (n.slice(0, 3) == "+32") {

      temp = n.slice(3, 13);
      return formatBelgianMobile(temp);

    } else if (n.slice(0, 4) == "0031") {

      temp = "+" + n.slice(2, 13);
      return formatDutchPhone(temp);

    } else if (n.slice(0, 5) == "00320") {

      temp = n.slice(4, 13);
      return formatBelgianLandline(temp);

    } else if (n.slice(0, 5) == "00324") {

      temp = "0" + n.slice(4, 13);
      return formatBelgianMobile(temp);

    } else {
      return n;
    }

  } else if (n.length == 14) {

    if (n.slice(0, 4) == "0031") {

      temp = "+31" + n.slice(5, 14);
      return formatDutchPhone(temp);

    } else if (n.slice(0, 4) == "0032") {

      temp = n.slice(4, 14);
      return formatBelgianMobile(temp);

    } else {
      return n;
    }

  } else {
    return n;
  }



}


function formatBelgianLandline(temp) {

  var firstTwo = temp.slice(0, 2);

  if (firstTwo == "02" || firstTwo == "03" || firstTwo == "04" || firstTwo == "09") {

    return firstTwo + " " + temp.slice(2, 5) + " " + temp.slice(5, 7) + " " + temp.slice(7, 9);

  } else {

    return temp.slice(0, 3) + " " + temp.slice(3, 5) + " " + temp.slice(5, 7) + " " + temp.slice(7, 9);

  }
}

function formatBelgianMobile(temp) {

  return temp.slice(0, 4) + " " + temp.slice(4, 6) + " " + temp.slice(6, 8) + " " + temp.slice(8, 10);

}

function formatDutchPhone(temp) {

  return temp.slice(0, 3) + " " + temp.slice(3, 4) + " " + temp.slice(4, 6) + " " + temp.slice(6, 8) + " " + temp.slice(8, 10)+ " " + temp.slice(10, 12);

}


