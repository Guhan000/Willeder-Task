import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery(){
    const location = useLocation();
    return new URLSearchParams(location.search);
}

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const { resetPassword } = useUserAuth();
    const navigate = useNavigate();

    const query = useQuery();

    const handleSubmit = async () => {
        try{
            resetPassword(query.get('oobCode'), password);
            navigate('/');
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                <h1>Reset Password</h1>
                <input type='password' placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ResetPassword