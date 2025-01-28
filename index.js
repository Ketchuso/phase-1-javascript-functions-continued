// code your solution here
function saturdayFun(words){
     let activity = "roller-skate";
     if (words){
        activity = words;
     }
     return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (words){
    let activity = "go to the office";
    if (words){
        activity = words;
    }
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair){
    return function result(adj = "special"){
        return `You are ${flair}${adj}${flair}!`;
    }
}