import React from 'react';
import useInputState from '../hooks/useInputState';

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');

  return (
    <>
      <h1>
        Email is : {email} & password is: {password}
      </h1>
      <input type='email' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>
      <input type='password' value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Reset Password</button>
    </>
  );
}
