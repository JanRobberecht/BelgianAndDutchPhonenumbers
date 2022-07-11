
// Test

console.log(evaluatePhone("+320486505050"));


function evaluatePhone(e) {

    // var n = String(e);
    
    var temp;
  
    if (n == "") {
      return n;
  
    } else if (n.length == 8 ) {
  
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
  
            temp = "+31" + n.slice(1,10);
            return formatDutchPhone(temp);
  
          } else {
            return n;
          }
  
    } else if (n.length == 11) {
  
          if (n.slice(0, 3) == "+32") {
  
            temp = "0" + n.slice(3, 11);
            return formatBelgianLandline(temp);
            
          } else {
            return n;
          }
  
    } else if (n.length == 12) {
  
          if (n.slice(0, 3) == "+31") {
  
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
  
    var firstTwo = temp.slice(0,2);
  
    if (firstTwo == "02" || firstTwo == "03" || firstTwo == "04" || firstTwo == "09"){
  
      return firstTwo + " " + temp.slice(2,5) + " " + temp.slice(5,7) + " " + temp.slice(7,9);
     
    } else {
  
      return temp.slice(0,3) + " " + temp.slice(3,5) + " " + temp.slice(5,7) + " " + temp.slice(7,9);
  
    }
  }
  
  function formatBelgianMobile(temp) {
  
    return temp.slice(0,4) + " " + temp.slice(4,6) + " " + temp.slice(6,8) + " " + temp.slice(8,10);
  
  }
  
  function formatDutchPhone(temp) {
  
    return temp.slice(0,3) + " " + temp.slice(3,6) + " " + temp.slice(6,9) + " " + temp.slice(9,12);
  
  }
  
  
  /*
  WAYS OF WRITING #	  EVALUATION  TYPE
  38285050	      8	  aantal 8	  belgisch vast
  038285050	      9	  begin 0	  belgisch vast
  486505050	      9	  begin 4	  belgisch mobiel
  612312312	      9	  begin 6	  nederlands mobiel
  0486505050	  10  begin 04	  belgisch mobiel
  0612312312	  10  begin 06	  nederlands mobiel
  +3238285050	  11  begin +32	  belgisch vast
  +31612312312	  12  begin +316  nederlands mobiel
  +32038285050	  12  begin +320  belgisch vast
  +32486505050	  12  begin +324  belgisch mobiel
  003238285050	  12  begin 0032  belgisch vast
  +310612312312	  13  begin +31	  nederlands mobiel
  +320486505050	  13  begin +32	  belgisch mobiel
  0031612312312	  13  begin 0031  nederlands mobiel
  0032038285050	  13  begin 00320 belgisch vast
  0032486505050	  13  begin 00324 belgisch mobiel
  00310612312312  14  begin 0031  nederlands mobiel
  00320486505050  14  begin 0032  belgisch mobiel
  */
  