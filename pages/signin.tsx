import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { logIntoAccount } from '../lib/request-handler';

export default function SignInPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currValue = e.target.value;
    setLogin(currValue);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currValue = e.target.value;
    setPassword(currValue);
  };

  const signIn = async () => {
    const user = {
      login,
      password,
    };

    logIntoAccount(user);
  };

  return (
    <>
      <h1>Sign in Page</h1>
      <input
        type='text'
        name='login'
        placeholder='Login'
        value={login}
        onChange={onLoginChange}
      />
      <input
        type='text'
        name='password'
        placeholder='Password'
        value={password}
        onChange={onPasswordChange}
      />
      <button onClick={signIn}>Sign in</button>
      <p>
        <Link href='/signup'>Are you new here?</Link>
      </p>
    </>
  );
}
