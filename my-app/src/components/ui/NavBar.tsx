// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText,
// } from 'reactstrap';

// export default function NavBar(): JSX.Element {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = (): void => setIsOpen(!isOpen);
//   return (
//     <div>
//       <Navbar>
//         <NavbarBrand>HARRY POTTER</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/">HELLO PAGE</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/">CARDS</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/fav">FAVORITES</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="navbar" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
        <NavbarBrand>HARRY POTTER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">HELLO PAGE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">CARDS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fav">FAVORITES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
