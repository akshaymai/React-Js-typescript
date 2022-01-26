class Todo{

    id: String;
    text : String;

    constructor(todoText:String){
        this.text=todoText;
        this.id=new Date().toISOString()
    }

}

export default Todo