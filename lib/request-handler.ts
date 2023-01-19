const endpoint = 'http://localhost:3000/';

async function sendPostRequest(path: string, body: Record<string, string>) {
  try {
    const data = await fetch(`${endpoint}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.status);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function createAccount(body: Record<string, string>) {
  const path = 'authorization/signup';

  const status = await sendPostRequest(path, body);

  return status === 201;
}

async function logIntoAccount(body: Record<string, string>) {
  const path = 'authorization/signin';
  const status = await sendPostRequest(path, body);

  return status === 201;
}

export { logIntoAccount, createAccount };
