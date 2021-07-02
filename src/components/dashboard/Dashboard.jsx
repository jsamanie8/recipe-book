import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { id } = useParams();
    const [userId, storeUser] = useState(0);

    useEffect(() => {
        captureUserInfo();
    });

    const captureUserInfo = () => {
        debugger;
        console.log(id);
    }

    return (
        <>
            <div>Profile Info</div>
        </>
    );
}

export default Dashboard;