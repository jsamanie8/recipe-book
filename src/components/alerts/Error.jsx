import Alert from 'react-bootstrap/Alert';

const Error = (props) => {
    if (props.show) {
        return (
            <Alert variant="danger" onClose={props.handleClose} dismissible>
                {props.message}
            </Alert>
        );
    } else {
        return null;
    }
}

export default Error;