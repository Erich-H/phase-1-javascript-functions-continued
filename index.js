// code your solution here
//function declaration with default params
function saturdayFun(activity = "roller-skate") {
    const satFun = `This Saturday, I want to ${activity}!`
    return satFun
}

//function expression
const mondayWork = function(activity = "go to the office") {
    const work = `This Monday, I will ${activity}.`
    return work
}

function wrapAdjective(flair = "*") {
    return function(param1 = "special") {
        return `You are ${flair}${param1}${flair}!`
    }   
}