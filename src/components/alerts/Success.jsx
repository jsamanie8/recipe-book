import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Success = (props) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="success" onclose={() => setShow(false)} dismissible>
                {props.message}
            </Alert>
        );
    }
}

export default Success;