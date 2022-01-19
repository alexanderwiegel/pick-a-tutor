import React from "react";
import {Form, Button} from "react-bootstrap";

class ReviewReportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert("A report was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="reportFormTextArea">
                    
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Type your report."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="outline-dark">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ReviewReportForm;
