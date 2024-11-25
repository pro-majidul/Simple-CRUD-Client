import { useLoaderData } from "react-router-dom";

const User = () => {
    const users = useLoaderData();
    const handelDeleteUser = id => {
        console.log('delete id ', id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(data =>{
            alert('user data delete successfully');
            console.log(data);
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