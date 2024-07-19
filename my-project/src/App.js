import { useState } from 'react';
import './App.css';

const App = () => {

  const [formData, setFormData] = useState(
    {firstName: "", lastName:"", email:"",Contries:"", streetAdd:"", city:"", state:"", pinCode:"",comments:false,
     candidates:false, offers:false, mode:""}
  );

  console.log(formData);


  function changeHandler(event){
    const{name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Your form is full submitted thank you !");
     console.log(formData);
     formData.value="";
  }


  
  return (
    <div className="App">
     <form onSubmit={submitHandler}>

      <label>First name : </label>
      <input type='text' placeholder='Enter your first name' onChange={changeHandler} name='firstName'
      value={FormData.firstName}></input>
      <br></br>
      <br></br>


      <label>Last name : </label>
      <input type='text' placeholder='Enter your Last name'
      name='lastName' value={formData.lastName}
      onChange={changeHandler}
      ></input>
      <br></br>
      <br></br>



      <label>Email address : </label>
      <input type='text' placeholder='xyz@gmail.com' 
      name='email' value={formData.email}
      onChange={changeHandler}
      ></input>
      <br></br>
      <br></br>


      <label>Country : </label>
      <select
      name='Contries'
      onChange={changeHandler}
      id='country'
      value={formData.country}

      >
        <option value="india">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Russia">Russia</option>
      </select>


     <br></br>
     <br></br>

     <label>Street address : </label>
     <input type='text' placeholder='main shyam gali no 2'
     onChange={changeHandler}
     name='streetAdd'
     value={formData.streetAdd}   
     ></input>
     <br></br>
     <br></br>

     <label>City : </label>
     <input type='text' placeholder='Delhi'
     onChange={changeHandler}
     name='city'
     value={formData.city}   
     ></input>
     <br></br>
     <br></br>

     <label>State / Province : </label>
     <input type='text' placeholder='UttarPradesh'
     onChange={changeHandler}
     name='state'
     value={formData.state}   
     ></input>
     <br></br>
     <br></br>

     <label>ZIP / Postal code : </label>
     <input type='number' placeholder='211005'
     onChange={changeHandler}
     name='pinCode'
     value={formData.pinCode}   
     ></input>
 <br></br>
 <br></br>

<label htmlFor='isVisible'>By Email : </label> 
<br></br>
<br></br>
<input type='checkbox' name='comments' id='comment'  onChange={changeHandler} value={formData.comment}></input>
<label htmlFor='comment'>Comments</label>
<br></br>
<br></br>
<input type='checkbox' name='candidates'  id='candidates' 
value={formData.candidates}
onChange={changeHandler}></input>
<label htmlFor='candidates'>Candidates</label>
<br></br>
<br></br>
<input type='checkbox' name='offers'  id='offers'
 value={formData.offers}
 onChange={changeHandler}></input>
<label htmlFor='offers'>Offers</label>

 <br></br>
 <br></br>

<label htmlFor='isVisible'>Push Notification : </label> 
<br></br>
<br></br>
<input type='radio' name='mode' id='Everything' value="Everything" onChange={changeHandler} 
checked={formData.mode === "Everything"}
></input>
<label htmlFor='Everything'>Everything</label>
<br></br>
<br></br>
<input type='radio' name='mode'  id='same' value='same' onChange={changeHandler} checked={formData.mode === "same"}></input>
<label htmlFor='same'>Same as well</label>
<br></br>
<br></br>
<input type='radio' name='mode'  id='noNoti' value='noNoti' onChange={changeHandler} checked={formData.mode === "noNoti"}></input>
<label htmlFor='noNoti'>No push Notification</label>

<br></br>
<br></br>
<br></br>

<button>Submit Form</button>

     </form>
    </div>
  );
}

export default App;
