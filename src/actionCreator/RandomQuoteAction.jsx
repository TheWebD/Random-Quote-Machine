import {RANDOMCOLOR,RANDOMQUOTE, RANDOMAUTHOR} from "../actionTypes/ActionTypes"

let randomQuote = (selectedQuote) => {
    return {
        type: RANDOMQUOTE,
        actionQuote: selectedQuote
    }
}

let randomAuthor = (selectedAuthor) => {
    return {
        type: RANDOMAUTHOR,
        actionAuthor: selectedAuthor
    }
}
  
let randomColor = (selectedColor) => {
    return {
        type: RANDOMCOLOR,
        actionColor: selectedColor
    }
}


export {randomColor, randomQuote, randomAuthor}