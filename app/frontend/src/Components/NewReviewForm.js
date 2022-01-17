import React from "react";
import { Form, Button } from "react-bootstrap";

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewTextValue: "",
            rating: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value =
            target.type === "radio" ? parseInt(target.value, 10) : target.value;
        const name = target.name;

        console.log("Value from " + name + " is " + value);
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        alert(
            "A new review with rating " +
                this.state.rating +
                " was submitted: " +
                this.state.reviewTextValue
        );
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="reportFormTextArea">
                    
                    <div key="ratingRadiosGroup" className="mb-3">
                        Rating: &nbsp;
                        {[1, 2, 3, 4, 5].map((x) => (
                            <Form.Check
                                inline
                                label={x}
                                value={x}
                                name="rating"
                                type="radio"
                                id={`ratingRadio-${x}`}
                                onChange={this.handleChange}
                            />
                        ))}
                        <i
                            className="bi bi-star-fill"
                            style={{
                                color: "#ffff00",
                            }}
                        /> stars
                    </div>
                    <Form.Control
                        name="reviewTextValue"
                        as="textarea"
                        rows={5}
                        placeholder="Type your review."
                        value={this.state.reviewTextValue}
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

export default NewReviewForm;
