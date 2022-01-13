import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function PricesFilter() {
    return (
        <Form>
            <Row>
                <h5>Prices</h5>

                <div key="pricesFilter" className="mb-3">
                    <Form.Check
                        type="radio"
                        id="0-5 €"
                        label="0-5 €"
                        name="pricesGroup"
                    />
                    <Form.Check
                        type="radio"
                        id="5-10 €"
                        label="5-10 €"
                        name="pricesGroup"
                    />
                    <Form.Check
                        type="radio"
                        id="10-15 €"
                        label="10-15 €"
                        name="pricesGroup"
                    />
                    <Form.Check
                        type="radio"
                        id="15-20 €"
                        label="15-20 €"
                        name="pricesGroup"
                    />
                    <Form.Check
                        type="radio"
                        id="+20 €"
                        label="+20 €"
                        name="pricesGroup"
                    />
                    
                </div>
            </Row>
            <Row style={{ marginLeft: "5px" }}>
                <Form.Control
                    inline
                    size="sm"
                    type="text"
                    placeholder="min"
                    style={{ width: "55px" }}
                />
                &nbsp; to &nbsp;
                <Form.Control
                    inline
                    size="sm"
                    type="text"
                    placeholder="max"
                    style={{ width: "55px" }}
                />
            </Row>
        </Form>
    );
}

export default PricesFilter;
