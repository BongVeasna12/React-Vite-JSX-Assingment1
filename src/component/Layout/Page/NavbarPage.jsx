
import {  Navbar } from 'flowbite-react';
function NavbarPage() {
  return (
  <div className='nabar'>
    <div>
      <Navbar className="p-4">
        <Navbar.Brand href="">
          <img  src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110180743" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
  );
}

export default NavbarPage;
