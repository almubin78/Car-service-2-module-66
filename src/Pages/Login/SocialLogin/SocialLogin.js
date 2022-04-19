import React from 'react';
import google from '../../../images/social/goole.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/GitHub-Mark.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    let Loading;
    // if (error || error2) {
    //     errorElement = <div>
    //         <p className='text-danger'>Error: {error?.message} {error2?.message}</p>
    //     </div>
    // }
    if (error || error2) {
        errorElement = <div>
            <p className='text-danger'>পপ আপ কেটে দিলে তো লগিন করতে পারবা না, বোকা। আবার চেষ্টা কর।  </p>
        </div>
    }
    if (loading || loading2) {
        Loading = <p className='text-primary'> তোমার পেজ প্রসেসিং করা হচ্ছে <span className='text-danger'>একটু অপেক্ষা কর। </span></p>;
    }
    if (user || user2) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {Loading}
            {errorElement}
        
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{}} src={google} alt="" />
                    <span className="px-2">Goole Sign In</span>
                </button>

                <button
                    
                    className='btn btn-info w-50  d-block mx-auto mb-2'>
                    <img style={{}} src={facebook} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50  d-block mx-auto mb-2'>
                    <img style={{}} src={github} alt="" />
                    <span className="px-2">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;