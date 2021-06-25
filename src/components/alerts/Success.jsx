import Alert from 'react-bootstrap/Alert';

const Success = (props) => {
    if (props.show) {
        return (
            <Alert variant="success" onClose={props.handleClose} dismissible>
                {props.message}
            </Alert>
        );
    } else {
        return null;
    }
}

export default Success;