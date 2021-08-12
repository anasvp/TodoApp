import React from 'react';
class TodoApp extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        textContent : "",
        listItems: [],
        IsEditItem:"",
        checkEdit:false,
    };
}
handleChange = (event) =>{
    this.setState({
        textContent : event.target.value,
      })     
}
addItem = (event) =>{
    event.preventDefault();
    let currenttext = this.state.textContent;
    let currentitems = this.state.listItems;
    if(this.state.textContent === ''){
            alert("Plesae Enter Item Name")
    }
    else{
             if(this.state.checkEdit === true){
                this.state.listItems.map((elm,key)=>{
                    if(elm === this.state.IsEditItem)
                    {
                        let currenttext = this.state.textContent
                        if (key !== -1) {
                             this.state.listItems[key] = currenttext;
                             this.setState({
                                listItems : currentitems,
                                textContent : "",
                                checkEdit:false,             
                              })
                        }
                    }
                    return elm;
                })
             }
             else{
                currentitems.push(currenttext);      
                this.setState({
                    listItems : currentitems,
                    textContent : "",             
                  })
             } 
            }         
    }

editItem = (itm,key)=>{
//   let editItem = this.state.listItems.find((elm)=>{
//         return elm === itm;
//   })
  this.setState({
    textContent : itm,
    IsEditItem:itm,
    checkEdit:true,
  })
}
removeItem = (key)=>{
    let arrayitems = this.state.listItems;
    arrayitems.splice(key,1);
    this.setState({
    listItems : arrayitems,
       
      })
}
    render() 
    {
        return (
            <div>
                 <div className="Todoapp-Div">
                <h1>TodoApp</h1>
                <form className="Inputdiv" onSubmit={this.addItem}>
                    <input type="text" value={this.state.textContent} className="form-control" placeholder="Enter Items" onChange={this.handleChange}/>
                </form>
            </div> 
            <div className="TodoListDiv">
                <ul>                    
                    {
                        this.state.listItems.map((itm,key)=>{
                            return(
                                <li key={key}><span data-item={key}>{itm} </span><i className="fas fa-edit" aria-hidden="true" onClick={()=>{this.editItem(itm,key)}}></i> <i className="fa fa-trash" aria-hidden="true" onClick={()=>{this.removeItem(key)}}></i></li>
                            ) 
                        })
                    }
                </ul>
                </div>
            </div>          
        )
    }
}

export default TodoApp;