import React from "react";
import User from "./User";
//Компонент Users
class Users extends React.Component {
    //Вывод польователей с помощью метода map()
    render() {
        if(this.props.users.length > 0){
            return(<div> 
                {this.props.users.map((el) => (
                    <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/>))}
            </div>)
        }   else return(<div className="user"> 
               <h3>Пользователей нет</h3>
                </div>)
        }
  }

  export default Users 