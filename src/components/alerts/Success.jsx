import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Success = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    }

    if (show) {
        return (
            <Alert variant="success" onClose={handleClose} dismissible>
                {props.message}
            </Alert>
        );
    } else {
        return null;
    }
}

export default Success;