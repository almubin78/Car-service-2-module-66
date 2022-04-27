import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log('inside require auth', user)
    //loading 62.8 , এটা করলে লগ-আউটের সমস্যা টা হয়না।    
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <div className='text-center'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button
            className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email for 63_5-3');
                }}
      >
               Send Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;