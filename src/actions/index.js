export const addTodo = (data)=> {
    console.log(data)
    console.log("action add")
    return {
        type: "ADD_TODO",
        Payload : data
    }
}

export const getTodo = (data)=> {
    console.log(data)
    console.log("action get")
    return {
        type: "GET_TODO",
        Payload : data
    }
}

export const deleteTodo = (data)=> {
    return {
        type: "DELETE_TODO",
        Payload:data
    }
}

export const editTodo = (data)=> {
    console.log(data)
    console.log("action edit")
    return {
        type: "EDIT_TODO",
        payload:data
    }
}