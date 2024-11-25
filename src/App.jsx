
import './App.css'

function App() {

  const handelFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };
    // databese data creade korar jonne 
    fetch('http://localhost:5000/user',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        //data thikthak moto gele ekta alert er sahajje janiye deya 
        if(data.insertedId){
          alert('data added in database successfully ');
          //reset form
          form.reset();
        }
      })

  }

  return (
    <>

      <h1>Vite + React</h1>
      <form onSubmit={handelFormSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add" />
      </form>

    </>
  )
}

export default App
