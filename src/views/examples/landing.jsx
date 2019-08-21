
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
import { Link } from "react-router-dom";

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
                                        Scroll down to reserve a conference room!<br />
                                        <span className="text-white"></span>
                                    </h1>
                                    <p className="text-white mb-3">

                                    </p>
                                    <div className="btn-wrapper mb-3">
                                        <p className="category text-success d-inline">
                                            From $35 per hour
                    </p>
                                        
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
                                        src={require("../../assets/img/pipeline2.png")}
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
                                        Choose the conference room{" "}
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
                                                src={require("../../assets/img/pipeline.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Large conference room</h4>
                                                    <span>$85 per hour</span>
                                                    <hr className="line-primary" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>Up to 16 seats</ListGroupItem>
                                                    <ListGroupItem>Staff support</ListGroupItem>
                                                    <ListGroupItem>Unlimited Coffee</ListGroupItem>
                                                    <ListGroupItem>Internet access</ListGroupItem>
                                                    <ListGroupItem>Monitor with HDMI and Chromecast</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button className="btn-simple" 
                                                color="primary" 
                                                to="reserve"
                                                tag={Link}>
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
                                                src={require("../../assets/img/pipeline.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Small conference room</h4>
                                                    <span>$65 per hour</span>
                                                    <hr className="line-success" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>Up to 8 seats</ListGroupItem>
                                                    <ListGroupItem>Staff support</ListGroupItem>
                                                    <ListGroupItem>Unlimited Coffee</ListGroupItem>
                                                    <ListGroupItem>Internet access</ListGroupItem>
                                                    <ListGroupItem>Monitor with HDMI and Chromecast</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                        <Button 
                                                className="btn-simple" 
                                                color="success" 
                                                to="reserve"
                                                tag={Link}
                                            >
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
                                                src={require("../../assets/img/pipeline.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Common area meeting day pass</h4>
                                                    <span>$35 per hour</span>
                                                    <hr className="line-info" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>Workspace day pass for non members</ListGroupItem>
                                                    <ListGroupItem>Staff support</ListGroupItem>
                                                    <ListGroupItem>Unlimited Coffee</ListGroupItem>
                                                    <ListGroupItem>Internet access</ListGroupItem>
                                                    <ListGroupItem>Access to common meeting areas</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button 
                                                className="btn-simple" 
                                                color="info" 
                                                to="reserve"
                                                tag={Link}
                                            >
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
