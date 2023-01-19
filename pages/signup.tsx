import Link from 'next/link';
import Router from 'next/router';
import { ChangeEvent, useState } from 'react';
import { createAccount, logIntoAccount } from '../lib/request-handler';

export default function SignUpPage() {
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

  const signUp = async () => {
    const user = {
      login,
      password,
    };

    const isSuccessful = (await createAccount(user)) as boolean;

    if (isSuccessful) {
      Router.push('/home');
    }
  };

  return (
    <>
      <h1>Sign up Page</h1>
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
      <button onClick={signUp}>Sign in</button>
      <p>
        <Link href='/signin'>Already have an account?</Link>
      </p>
    </>
  );
}
