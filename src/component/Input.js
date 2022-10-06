import React, { useState } from 'react'

const Input = (props) => {
    const initial = {
        username : '',
        password : '',
        Email : '',
    }
     const [output, setOutput] = useState(initial);
     
     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setOutput(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(output);
      }
    
    const {data} = props;
  return (
    <div>
        <h1>Form</h1>
            <form onSubmit={handleSubmit}>

        {data.map((input) => {
            return (
                
                <>
                 <label>{input.name}:</label>
                 <input type={input.type} name={input.name} placeholder={input.placeholder} value={output[input.name]}
                 onChange={(e) =>{handleChange(e)}}
                 />
                 
                
                </>
            )
        })}
   
        <input type="submit"/>
    </form>
    </div>

  )
}

export default Input;