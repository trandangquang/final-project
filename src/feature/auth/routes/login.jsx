import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components';

export const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const getUid = localStorage.getItem('uid');

  useEffect(() => {
    if (!getUid) {
      navigate('/login');
    } else {
      navigate('/home');
    }
  }, [getUid]);

  

  const onLogin = async values => {
    setIsSubmitting(true);
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);

        navigate('/');
      })
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setIsSubmitting(false);
      });
  };
  return <LoginForm onFinish={onLogin} isSubmitting={isSubmitting} />;
};
