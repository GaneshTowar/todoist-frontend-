const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
        
                const listdata = action.Payload
                console.log(listdata)
                return {...state,
                        list:[
                            ...state.list,
                            listdata]
                        }

        case "GET_TODO":
            const getdata = action.Payload
            console.log(getdata)
            return {...state,
                    list:[
                        ...getdata]
                    }
        
        case "DELETE_TODO":
            const deletedtodo = action.Payload
            const deletedtodo1 = state.list.filter((todo)=>{
                return todo._id !== deletedtodo._id
            })
            console.log(deletedtodo1)
            console.log(state.list)
            return {...state,
                    list:[
                        ...deletedtodo1]
                    }
    
            
            
        default: return state;
    }
}


export default todoReducers;