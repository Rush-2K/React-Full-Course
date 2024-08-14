import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const searchParams = new URL(request.url).searchParams  //URL is default browser feature
  const mode = searchParams.get('mode') || 'login';

  console.log('mode: ', mode);

  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Unsupported mode'}, {status: 422});
  }

  const data = request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:5038/'+mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  console.log('response: ', response);

  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not authenticate user.'}, {status: 500});
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  

  return redirect('/');
}