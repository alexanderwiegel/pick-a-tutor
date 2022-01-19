import React from "react";
import { Form } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";

function ReviewsFilter() {
    return (
        <Form>
            <h5>Ratings</h5>
            <div key="ratingsFilter" className="mb-3">
                <Form.Check
                    type="radio"
                    id="4+ stares"
                    label="4+ stares"
                    name="ratingsGroup"
                ></Form.Check>
                <Form.Check
                    type="radio"
                    id="3+ stares"
                    label="3+ stares"
                    name="ratingsGroup"
                />
                <Form.Check
                    type="radio"
                    id="2+ stares"
                    label="2+ stares"
                    name="ratingsGroup"
                />
                <Form.Check
                    type="radio"
                    id="1+ stares"
                    label="1+ stares"
                    name="ratingsGroup"
                />
            </div>
        </Form>
    );
}

export default ReviewsFilter;
