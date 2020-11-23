const allFunction = {
    firstFunction: function(firstValue, secondValue, thirdValue) {        
        if (secondValue === 0.0 || thirdValue === 0) return null;
        secondValue += 1
        const temp = secondValue ** thirdValue
        return (firstValue * temp).toFixed(2);
    },
    secondFunction: function (firstValue, secondValue, thirdValue) {
        if (secondValue === 0.0) return null;
        const temp = (secondValue + 1) ** thirdValue
        const numerator = (temp - 1) * firstValue
        const denominator = temp * secondValue
        return (numerator/denominator).toFixed(2)
    },
    thirdFunction: function (firstValue, secondValue, thirdValue) {
        if (secondValue === 0.0 || thirdValue === 0) return null;
        const temp = (secondValue + 1) ** thirdValue
        const denominator = (temp - 1) 
        const numerator = firstValue * secondValue
        return (numerator/denominator).toFixed(2)
    },
    fourthFunction: function(firstValue, secondValue, thirdValue) {
        const denominator = (secondValue + 1) ** thirdValue 
        const numerator = firstValue 
        return (numerator/denominator).toFixed(2)
    },
    fifthFunction: function(firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const denominator = (temp - 1)
        const numerator = temp * secondValue * firstValue
        if (denominator === 0) return null;
        return (numerator/denominator).toFixed(2)
    },
    sixthFunction: function(firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const numerator = (temp - 1) * firstValue 
        const denominator =  secondValue
        if (denominator === 0) return null;
        return (numerator/denominator).toFixed(2)
    },
    seventhFunction: function(firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const numerator = (temp - 1 - thirdValue*secondValue) * firstValue 
        const denominator =  secondValue ** 2
        if (denominator === 0) return null;
        return (numerator/denominator).toFixed(2)
    },
    eighthFunction: function(firstValue, secondValue, thirdValue) {
        const temp = (secondValue + 1) ** thirdValue
        const denominator = (temp - 1 - thirdValue*secondValue)  
        const numerator =  (secondValue ** 2) * firstValue
        if (denominator === 0) return null;
        return (numerator/denominator).toFixed(2)
    } 
}

export default allFunction;