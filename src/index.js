
 function digits(number) {
     switch (number) {
         case '1':
             return 'one'
         case '2':
             return 'two'
         case '3':
             return 'three'
         case '4':
             return 'four'
         case '5':
             return 'five'
         case '6':
             return 'six'
         case '7':
             return 'seven'
         case '8':
             return 'eight'
         case '9':
             return 'nine'
         default:
             return ''
     }
 }

 function decade(number) {
     switch (number[0]) {
         case '0':
             return digits(number[1])
         case '1':
             return one(number)
         case '2':
             return 'twenty ' + digits(number[1])
         case '3':
             return 'thirty ' + digits(number[1])
         case '4':
             return 'forty '  + digits(number[1])
         case '5':
             return 'fifty ' + digits(number[1])
         case '6':
             return 'sixty '+ digits(number[1])
         case '7':
             return 'seventy '+ digits(number[1])
         case '8':
             return 'eighty '+ digits(number[1])
         case '9':
             return 'ninety '+ digits(number[1])
     }
 }

 function one(number) {
     switch (number) {
         case '10':
             return 'ten'
         case '11':
             return 'eleven'
         case '12':
             return 'twelve'
         case '13':
             return 'thirteen'
         case '14':
             return 'fourteen'
        case '15':
            return 'fifteen'
        case '16':
            return 'sixteen'
        case '17':
            return 'seventeen'
        case '18':
            return 'eighteen'  
        case '19':
            return 'nineteen'
     }
 }

 module.exports = function toReadable(number, len) {
    var result = ''
    if (number ===0){
        return 'zero'
    }

    let numberStr=number.toString()
    var count =0
    while(number>=1){
        number/=10
        count +=1
    }
    //console.log('колличество цифр',count)
    
    let h =Math.trunc( count % 3)
    let t =Math.trunc( count/3)

    if (h===1){
        result+=digits(numberStr[0])
        numberStr = numberStr.slice(1)
    }
    if (h===2){
        result += decade(numberStr[0] + numberStr[1])
        numberStr = numberStr.slice(2)
    }
    if (h===3){
        result += digits(numberStr[0]) + ' hundred ' + decade(numberStr[1] + numberStr[2])
        numberStr = numberStr.slice(3)
    }

    for (i=1;i<=t;i+=1){
        if (i===3 && h!==0){
            result += ' billion '
        }
        if (i===2 && h!==0){
            result += ' million '
        }
        if (i===1 && h!==0){
            result += ' thousand '
        }
        result += digits(numberStr[0]) + ' hundred ' + decade(numberStr[1] + numberStr[2])
        numberStr = numberStr.slice(3)
    }

    if (result[result.length-1]===' '){
        result = result.slice(0,-1)
    }
    return result
}