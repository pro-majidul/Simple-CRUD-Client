import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderData = useLoaderData();
  

    const handelupdateData = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const users = { name, email };
        fetch(`http://localhost:5000/user/${loaderData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)

        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data. modifiedCount > 0){
                    alert('user Updated successfully')
                   form.reset()
                }
            })
    }
    return (
        <div>
            <form onSubmit={handelupdateData}>
                <input type="text" name="name" defaultValue={loaderData.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loaderData.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;