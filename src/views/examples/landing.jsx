
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

class JPlanding extends React.Component {
    state = {
        squares1to6: "",
        squares7and8: ""
    };
    componentDidMount() {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", this.followCursor);
    }
    componentWillUnmount() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener(
            "mousemove",
            this.followCursor
        );
    }
    followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
            squares1to6:
                "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)",
            squares7and8:
                "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)"
        });
    };
    render() {
        return (
            <>
                <ExamplesNavbar /> 

                <div className="wrapper">
                    <div className="page-header">

                        <div className="content-center">
                            <Row className="row-grid justify-content-between align-items-center text-left">
                                <Col lg="6" md="6">
                                    <h1 className="text-white">
                                        El Socio keep your room <br />
                                        <span className="text-white">secured</span>
                                    </h1>
                                    <p className="text-white mb-3">

                                    </p>
                                    <div className="btn-wrapper mb-3">
                                        <p className="category text-success d-inline">
                                            From 9.99%/mo
                    </p>
                                        <Button
                                            className="btn-link"
                                            color="success"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            <i className="tim-icons icon-minimal-right" />
                                        </Button>
                                    </div>
                                    <div className="btn-wrapper">
                                        <div className="button-container">
                                            <Button
                                                className="btn-icon btn-simple btn-round btn-neutral"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fab fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-simple btn-round btn-neutral"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fab fa-dribbble" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-simple btn-round btn-neutral"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fab fa-facebook" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" md="5">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("../../assets/img/etherum.png")}
                                    />
                                </Col>
                            </Row>
                        </div>


                    </div>



                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path3.png")}
                        />
                        <Container>
                            <Row>
                                <Col md="4">
                                    <hr className="line-info" />
                                    <h1>
                                        Choose the room{" "}
                                        <span className="text-info">that fits your needs</span>
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../../assets/img/bitcoin.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Individual</h4>
                                                    <span>Features</span>
                                                    <hr className="line-primary" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>Sharing desk</ListGroupItem>
                                                    <ListGroupItem>Free coffe</ListGroupItem>
                                                    <ListGroupItem>24/7 Support</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button className="btn-simple" color="primary">
                                                Reserve
                      </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../../assets/img/etherum.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Co-op</h4>
                                                    <span>Features</span>
                                                    <hr className="line-success" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>150 messages</ListGroupItem>
                                                    <ListGroupItem>1000 emails</ListGroupItem>
                                                    <ListGroupItem>24/7 Support</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button className="btn-simple" color="success">
                                                Reserve
                      </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../../assets/img/ripp.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Bussiness</h4>
                                                    <span>Features</span>
                                                    <hr className="line-info" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>350 messages</ListGroupItem>
                                                    <ListGroupItem>10K emails</ListGroupItem>
                                                    <ListGroupItem>24/7 Support</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button className="btn-simple" color="info">
                                                Reserve
                      </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <Footer />
                </div>
            </>
        );
    }
}

export default JPlanding;
