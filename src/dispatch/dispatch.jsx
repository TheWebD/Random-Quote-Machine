import { randomAuthor, randomColor, randomQuote } from "../actionCreator/RandomQuoteAction"

const mapStateToProps = (state) => {
   return {
        selectedRandomNumber: state
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newSelectedQuote: (selectQuote) => {
            dispatch(randomQuote(selectQuote))
        },
        newSelectedAuthor: (selectAuthor) => {
            dispatch(randomAuthor(selectAuthor))
        },
        newSelectedColor: (selectColor) => {
            dispatch(randomColor(selectColor))
        }
    }
}

export {mapStateToProps, mapDispatchToProps}