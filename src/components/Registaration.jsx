
import { useState } from 'react';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

   const onSubmit = e => {
    e.preventDefault();

    const regristrationInformation = {
      name,
      email,
      password,
      confirm_password,
      phone_number,
      submittedOn: new Date()
    };

    console.log(regristrationInformation);

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
  };

  return (
    <div>
        <h2>registration</h2>
        <form onSubmit={onSubmit}>
            <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
            
          />
        
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label htmlFor='confirm_password'>Confirm Password:</label>
          <input
            id='confirm_password'
            name='confirm_password'
            type='confirm_password'
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirm_password}
          />
        </div>
        <div>
          <label htmlFor='phone_number'>Phone Number:</label>
          <input
            id='phone_number'
            name='phone_number'
            type='phone_number'
            onChange={e => setPhoneNumber(e.target.value)}
            value={phone_number}
          />
        </div>
        <button>Submit</button>
        </form>
    </div>
  );
}


  export default Registration;
