import { create } from 'zustand'

const initialData = {
    list: [],
    editList: []
}


const useStore = create((set,get) => ({
  ...initialData,
  addTodo: (listdata) => set((state) => ({...state,
    list:[
        ...state.list,
        listdata] })),
  


    getTodo : (getdata) => set((state)=>({...state,
        list:[
            ...getdata] })),
    
    deleteTodo : (deletedata) => {
        const list = get().list
        const deletedtodo1 = list.filter((todo)=>{
            return todo._id !== deletedata._id
        })
        set((state)=>({...state,
        list:[
            ...deletedtodo1]
    }))},

    editTodos: (editdata) => set((state)=>({...state,
         editList:editdata
        
    }))
            

}))
export default useStore