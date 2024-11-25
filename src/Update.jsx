import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderData = useLoaderData();

    const handelupdateData = e =>{
        e.preventDefault();
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