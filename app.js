// Math.acos მიენიჭება მნიშვნელობა აუცილებლად -1დან 1-ის ჩათვლით
// ნებისმიერი სხვა მნიშვნელობა (მაგალითად Math.acos(4) გამოიტანს შედეგს NaN )
let mathObjAcos = Math.acos(0.4)
let mathObjAcos2 = Math.acos(-0.4)

// გამოაქვს შედეგი მინიჭებული მნიშვნელობის კუთხე რადიანებში 0_დან პი_მდე
console.log(mathObjAcos)
console.log(mathObjAcos2)


// Math.pow ენიჭება მნიშვნელობა და ციფრი რამდენ ხარისხშიც გვინდა გაზრდა მინიჭებული მნიშვნელობის
let mathObjPow = Math.pow(5,2)
// გამოაქვს შედეგი (ამ შემთხვევაში) 25 (5-ი მე_2 ხარისხში)
console.log(mathObjPow)
// Math.pow ასევე შესაძლებელია ჩავწეროთ ასეთი სახით:console.log(6 ** 2) ამ შემთხვევაშიც იგივე შედეგს დაგვიბრუნებს
console.log(6 ** 2)


// Math.sign განსაზღვრავს მითითებული რიცხვის ნიშანს: დადებითია, უარყოფითი თუ ნული.
let mathObjSign = Math.sign(6)
let mathObjSign2 = Math.sign(-6)
let mathObjSign3 = Math.sign(0)
// შედეგს გამოიტანს შემდეგი სახით 1; -1; 0; 
console.log(mathObjSign)
console.log(mathObjSign2)
console.log(mathObjSign3)

// math.cbrt შესაძლებელია მიენიჭოს როგორც დადებითი ასევე უარყოფითი რიცხვითი მნიშვნელობა
let mathObjCbrt = Math.cbrt(8)
let mathObjCbrtNegative = Math.cbrt(-8)

// გვიბრუნებს შედეგს კუბური ფესვი მინიჭებული მნიშვნელობიდან(ამ შემთხვევაში 8_დან)
console.log(mathObjCbrt)
console.log(mathObjCbrtNegative)
