import Swal from "sweetalert2"
import { editToDo } from "../../redux/state/todo/todoSlice"
import store from "../../redux/store/store"

export function ToDoEditAlert(i,item){
    Swal.fire({
        title: 'Do you want to save the changes?',
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if (value) {
                store.dispatch(editToDo({index:i,task:value}))
              }
        }

      
      })
}