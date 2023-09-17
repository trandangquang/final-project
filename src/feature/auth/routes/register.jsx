import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components';

export const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onRegister = async values => {
    setIsSubmitting(true);
    await createUserWithEmailAndPassword(auth, values.email, values.password)
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

  return <RegisterForm onFinish={onRegister} isSubmitting={isSubmitting} />;
};
