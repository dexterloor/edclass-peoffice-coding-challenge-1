import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Dropdown,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function HeaderSection() {
  return (
    <Navbar className="mt-0 pt-4 pb-4" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/img/peoffice-logo.jpg"
            alt="PEOffice Logo"
            fluid
            className="w-50"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="w-100">
            <Col>
              <Nav className="mr-auto"></Nav>
            </Col>
            <Col xs={6}>
              <Form>
                <InputGroup>
                  <InputGroup.Text className="p-0">
                    <FontAwesomeIcon icon={Icons.faMagnifyingGlass} />
                  </InputGroup.Text>
                  <Form.Control
                    className="ps-2"
                    placeholder="Search Dashboard"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col>
              <Row>
                <div className="icon-circle icon-circle-home d-flex align-items-center justify-content-center rounded-circle">
                  <FontAwesomeIcon icon={Icons.faHouse} />
                </div>
                <div className="icon-circle icon-circle-settings d-flex align-items-center justify-content-center rounded-circle">
                  <FontAwesomeIcon icon={Icons.faCog} />
                </div>
                <Dropdown align="end">
                  <Dropdown.Toggle
                    as={Button}
                    variant="link"
                    id="dropdown-custom-components"
                    className="p-0"
                  >
                    <Image
                      src="/img/random-user.jpg"
                      alt="User Profile Picture"
                      className="icon-circle rounded-circle me-0 ms-0"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="p-0">
                    <Dropdown.Item href="#action/3.1">
                      <FontAwesomeIcon
                        icon={Icons.faAddressCard}
                        className="me-2"
                      />{" "}
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">
                      <FontAwesomeIcon icon={Icons.faUsers} className="me-2" />{" "}
                      Manage Users
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                      <FontAwesomeIcon icon={Icons.faArrowRightFromBracket} />{" "}
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
