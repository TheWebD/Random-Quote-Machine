import {randomColor, randomQuote, randomAuthor} from "../actionCreator/RandomQuoteAction"

const defaultState = {
    selectedColor: "",
    selectedQuote: "",
    selectedAuthor: "",
    emptyStr: "",
    selectedRandomNumber: ""
}

const RandomQouteReducer = (state = defaultState, action) => {
    switch(action.type){
        case randomQuote:
            return state.selectedQuote = action.actionQuote
        case randomAuthor:
            return state.selectedAuthor = action.actionAuthor
        case randomColor:
            return state.selectedColor = action.actionColor
        default: 
            return state.emptyStr
    }  
}

export default RandomQouteReducer;