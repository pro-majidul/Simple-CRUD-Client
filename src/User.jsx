import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
    const loaderUsers = useLoaderData();
    const [users , setUsers]= useState(loaderUsers)
    const handelDeleteUser = id => {
        console.log('delete id ', id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('user data delete successfully');

            }
            const reaminig = users.filter(item => item._id!==id);
            setUsers(reaminig)
            
        })
    }
    return (
        <div>
            {
                users.map(user => <p key={user._id}>id : {user._id} name : {user.name} email : {user.email} <button onClick={() => handelDeleteUser(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default User;