import React, {Component} from "react";
import {Form, Card, CardBody, Container, FormGroup, FormText, Input, Label, Button, FormFeedback} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';
import Select from 'react-select'

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Forms", link: "#"},
            ],
            options: [
                {value: 'chocolate', label: 'Chocolate'},
                {value: 'strawberry', label: 'Strawberry'},
                {value: 'vanilla', label: 'Vanilla'},
            ],
            selectedOptions: null,
        };
    }

    handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
        console.log(`Options selected:`, selectedOptions);
    }

    onClick = async event => {
        event.preventDefault()
    }

    render() {
        let { selectedOptions, options } = this.state;
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Forms" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">
                                    Form with custom select
                                </h4>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail"
                                               placeholder="with a placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Invalid input</Label>
                                        <Input invalid />
                                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Select
                                            value={selectedOptions}
                                            onChange={this.handleChange}
                                            options={options}
                                            isMulti={true}
                                            classNamePrefix="form-control"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="textarea" name="text" placeholder="Textarea"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="file" name="file" id="exampleFile"/>
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup tag="fieldset">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1"/>{' '}
                                                Option one is this and that—be sure to include why it's great
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1"/>{' '}
                                                Option two can be something else and selecting it will deselect option
                                                one
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"/>{' '}
                                            Check me out
                                        </Label>
                                    </FormGroup>
                                    <Button
                                        type="submit"
                                        size="sm"
                                        className="mt-3"
                                        color="primary"
                                        onClick={this.onClick}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Forms;
