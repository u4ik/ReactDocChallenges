
import {useState} from 'react';

// When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.

const Form = () => {
  
  // Solution
  const [name, setName] = useState({firstName: '', lastName: ''})

  function handleFirstNameChange(e) {
    // setFirstName(e.target.value)
    setName({...name, firstName: e.target.value})
    
  }
  
  function handleLastNameChange(e) {
    setName({...name, lastName: e.target.value})
  }

  function handleReset() {
    setName({lastName: '', firstName: ''})
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={name.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        value={name.lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {name.firstName} {name.lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Form;