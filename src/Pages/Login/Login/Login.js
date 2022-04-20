import { async } from '@firebase/util';
import { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const navigateRegister = event =>{
        navigate('/register')
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
        await sendPasswordResetEmail(email);
        toast('Email Sent to your mail! Please check');
        }
        else{
            toast('Enter Your Email First')
        }

    }
    const location = useLocation();
    let errorElement;
    let Loading;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);  

      if(user){
          navigate(from, {replace: true});
      }
      if (error) {
        errorElement = <div>
            <p className='text-danger'>হয় মেইল ভুল দিছ,না হয় পাসওয়ার্ড ভুল দিছ। নতুবা দুটোই ভুল দিছ।আবার চেষ্টা কর।  </p>
        </div>
    }
    if(loading){
        Loading = <p className='text-primary'>তোমার লগিন প্রসেসিং করা হচ্ছে। <span className="text-danger">অপেক্ষা কর। </span></p>
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
        //console.log(email,password);console e mail+pass dekhar jonno. 
    }
    
    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {Loading}
            {errorElement}
            <p>New to Genius Car? <Link className='text-primary text-decoration-none' to='/register' onClick={navigateRegister}>Please Register</Link></p>

            <p>Forgate Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

           <SocialLogin/> 
            <ToastContainer/>
        </div>
    );
};

export default Login;