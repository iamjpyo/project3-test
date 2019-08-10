
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
                        <div className="page-header-image" />
                        <div className="content">
                            
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
                                            Cadsadadadaad{" "}
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
                                                        <h4 className="text-uppercase">Light Coin</h4>
                                                        <span>Plan</span>
                                                        <hr className="line-primary" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <ListGroup>
                                                        <ListGroupItem>50 messages</ListGroupItem>
                                                        <ListGroupItem>100 emails</ListGroupItem>
                                                        <ListGroupItem>24/7 Support</ListGroupItem>
                                                    </ListGroup>
                                                </Row>
                                            </CardBody>
                                            <CardFooter className="text-center">
                                                <Button className="btn-simple" color="primary">
                                                    Get plan
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
                                                        <h4 className="text-uppercase">Dark Coin</h4>
                                                        <span>Plan</span>
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
                                                    Get plan
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
                                                        <h4 className="text-uppercase">Bright Coin</h4>
                                                        <span>Plan</span>
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
                                                    Get plan
                      </Button>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>

</section>

                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default JPlanding;
