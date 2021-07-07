import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById as getUser } from '../../services/userService';
import Navbar from '../navbar/Navigbar';

const Dashboard = () => {
    const { id } = useParams();
    const [userId, storeUser] = useState(0);

    useEffect(() => {
        captureUserInfo();
    }, [userId]);

    const captureUserInfo = () => {
        getUser(id)
            .then(getUserSuccess)
            .catch(getUserError);
    }

    const getUserSuccess = (user) => {
        storeUser(user.id);
        console.log(`This is the user id ${userId}`);
    }

    const getUserError = (err) => {
        console.log(err);
    }

    return (
        <>
            <Navbar />
            {!userId ? null :
                (
                    <div>Profile Info {userId}</div>
                )
            }
        </>
    );
}

export default Dashboard;