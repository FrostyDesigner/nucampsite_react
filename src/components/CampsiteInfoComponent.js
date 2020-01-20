import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,
    BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil" />Submit Comment
            </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="text" id="rating" name="rating"
                                    innerRef={input => this.rating = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourName">Your Name</Label>
                                <Input type="text" id="yourName" name="yourName"
                                    innerRef={input => this.yourName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comments</Label>
                                <Input type="text" id="comment" name="comment"
                                    innerRef={input => this.comment = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            // <div></div>
            <div className="col-md-5 m1">
                <h4>Comments</h4>
                <div>
                    {comments.map(comment => <div key={comment.id}>{comment.text}<br></br>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </div>)}
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;