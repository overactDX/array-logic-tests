function arabicToRoman(number) {
    if (number <= 0 || number >= 4000) {
      return "ไม่สามารถแปลงได้";
    }
  
    const romanNumerals = [
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["", "M", "MM", "MMM"]
    ];
  
    const thousands = Math.floor(number / 1000);
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;
  
    const romanThousands = romanNumerals[3][thousands];
    const romanHundreds = romanNumerals[2][hundreds];
    const romanTens = romanNumerals[1][tens];
    const romanOnes = romanNumerals[0][ones];
  
    const romanNumber = romanThousands + romanHundreds + romanTens + romanOnes;
    return romanNumber;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(arabicToRoman(3549)); // Output: "MMMDXLIX"
  console.log(arabicToRoman(1987)); // Output: "MCMLXXXVII"
  console.log(arabicToRoman(3999)); // Output: "MMCMXCIX"
  console.log(arabicToRoman(0));    // Output: "ไม่สามารถแปลงได้"
  console.log(arabicToRoman(4000)); // Output: "ไม่สามารถแปลงได้"
  