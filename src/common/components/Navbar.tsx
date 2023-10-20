import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <BootstrapNavbar.Brand>StudentSorter</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">
                            Team Builder
                        </Nav.Link>
                        <Nav.Link as={Link} href="/seating">
                            Seating Chart Builder
                        </Nav.Link>
                        <Nav.Link as={Link} href="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
