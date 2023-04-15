const IData ={
    editList:[]
}

const edittodoReducer = (state = IData, action) => {
    switch (action.type) {
        case "EDIT_TODO":
        
                const listdata = action.payload
                console.log(listdata)
                return {
                    ...state, editList:listdata
                }
                                    
        default: return state;
    }
}


export default edittodoReducer;