      // 1-masala
// let num1 = 48         
// let num2 =  10          
// let num3 =  23           
// if (num1 % 2 === 0 && num1 % 5 === 0) {
//     console.log(num1 + "juft va 5 ga qoldiqsiz bo'linadi");
// } else {
//     console.log (num1 - "juft emas 5 ga bo'linmaydi")
// }

// if (num2 % 2 === 0 && num2 % 5 ===0) {
//     console.log(num2 + "juft va 5ga qoldiqsiz bo'linadi");
// } else {
//     console.log (num2 - "juft emas 5 ga bo'linmaydi")    
// }
// if (num3 % 2 === 0 && num3 % 5 ===0) {
//     console.log(num3 + "juft va 5ga qoldiqsiz bo'linadi");
// } else {
//     console.log (num3 - "juft emas 5 ga bo'linmaydi")    
// }
            //2-masala          

// var son1 = parseFloat(prompt("birinchi sonni kiriting"));
// var son2 = parseFloat(prompt("ikkinchi sonni kiriting"));
// var son3 = parseFloat(prompt("uchinchi sonni kiriting"));
// var son4 = parseFloat(prompt("to'rtinchi sonni kiriting"));
// var ko'paytma = 1;

// if (son1 % 3 === 0 || son1 % 7 === 0) {
//     ko'paytma *= son1;
// }
// if (son2 % 3 === 0 || son2 % 7 === 0) {
//     ko'paytma *= son2;
// }
// if (son3 % 3 === 0 || son3 % 7 === 0) {
//     ko'paytma *= son3;
// }
// if (son4 % 3 === 0 || son4 % 7 === 0) {
//     ko'paytma *= son4;
// }

// console.log("Berilgan sonlar orasida 3 ga yoki 7 ga karralilarining ko'paytmasi: " + ko'paytma);

       //3-masala
    //    function findDigitProduct(number) {
    //     if (number >= 10 && number <= 99) {
    //         const tens = Math.floor(number / 10);
    //         const units = number % 10;
    
            
    //         const product = tens * units;
    
    //         return product;
    //     } else {
            
    //         console.log("Faqat 2 xonali sonlarni kiriting!");
    //         return null; 
    //     }
    // }
  
    // const testNumber = 27;
    // const result = findDigitProduct(testNumber);
    // if (result !== null) {
    //     console.log(`Natija: ${result}`);
    // }
          //4-masala
                // function kvadratKubiniTop(son) {
                //     var xona1 = son % 10; 
                //     var xona10 = Math.floor(son / 10) % 10; 
                    
                //     if ((xona1 % 2 === 0) && (xona10 % 2 === 0)) { // agar juft bo'lsa
                //       var kvadrat = son * son; 
                //       var kub = son * son * son; 
                //       console.log("Berilgan sonning kvadrati: " + kvadrat + ", kubi: " + kub);
                //     } else {
                //       console.log("Berilgan sonning o'nlar va birlar xonasidagi son juft emas");
                //     }
                //   }
                  
                //   kvadratKubiniTop(20); // Masalan, 20 ni kiritish
   // 5-MASALA
   function findTensAndHundreds(number) {
    if (number < 100 || number > 999) {
      return "Son 3 xonali emas";
    } else {
      var hundreds = Math.floor(number / 100);
      var remainder = number % 100;
      var tens = Math.floor(remainder / 10);
      return "Yuzlar xonasi: " + hundreds + ", O'nlar xonasi: " + tens;
    }
  }
  
  // Masalan, 329 soni uchun:
  console.log(findTensAndHundreds(329)); 
      

