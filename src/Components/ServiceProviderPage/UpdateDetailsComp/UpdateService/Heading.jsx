import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Nav,NavItem,NavbarBrand,Container } from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href='/serviceprovider/updateDetails/'>Service</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn text-primary' to ='/serviceprovider/updateDetails/add'>Add Service</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
