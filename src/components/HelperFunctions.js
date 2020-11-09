const allFunction = {
    firstFunction: function(firstValue, secondValue, thirdValue) {        
        if (secondValue === 0.0) return null;
        secondValue += 1
        const temp = secondValue ** thirdValue
        return (firstValue * temp).toFixed(2);
    },
    secondFunction: function (firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const numerator = (temp - 1) * firstValue
        const denominator = temp * secondValue
        return (numerator/denominator).toFixed(2)
    },
    thirdFunction: function (firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const denominator = (temp - 1) 
        const numerator = firstValue * secondValue
        return (numerator/denominator).toFixed(2)
    },
    fourthFunction: function(firstValue, secondValue, thirdValue) {
        return 100.2;
    },
    fifthFunction: function(firstValue, secondValue, thirdValue) {
        return 100.2;
    },
    sixthFunction: function(firstValue, secondValue, thirdValue) {
        return 100.2;
    },
    seventhFunction: function(firstValue, secondValue, thirdValue) {
        return 100.2;
    },
    eighthFunction: function(firstValue, secondValue, thirdValue) {
        return 100.2;
    } 
}

export default allFunction;