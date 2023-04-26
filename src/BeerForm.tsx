import React, {useState} from 'react';
import {Button, Col, Form, ListGroup, Row} from 'react-bootstrap';


interface BeerFormProps {
    beers: string[];
    setBeers: (beers: string[]) => void;
}

const BeerForm: React.FC<BeerFormProps> = ({beers, setBeers}) => {
    const [newBeer, setNewBeer] = useState('');

    const handleAddBeer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newBeer.trim() === '') {
            return;
        }
        setBeers([...beers, newBeer]);
        setNewBeer('');
    };

    const handleRemoveBeer = (beerToRemove: string) => {
        setBeers(beers.filter((beer) => beer !== beerToRemove));
    };


    return (
        <div>
            <Form onSubmit={handleAddBeer}>
                <Row className="justify-content-center align-items-center mb-3">
                    <Col xs={8}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter beer name"
                                value={newBeer}
                                onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                                    setNewBeer(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={1} className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Row className="justify-content-center">
                <Col xs={8}>
                    <ListGroup>
                        {beers.map((beer, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                {beer}
                                <div>
                                    <Button variant="danger" size="sm" onClick={() => handleRemoveBeer(beer)}>
                                        Remove
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>
            </Row>
        </div>
    );


};

export default BeerForm;