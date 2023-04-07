import { Navbar, Image } from "react-bootstrap";

const MyNavbar = () => (
  <Navbar  className=" Navb p-3">
    <div className="mx-auto">
      <Image
        src="https://fontmeme.com/permalink/230407/44fb494fffaf8702bdbbfc19da3e7ac0.png"
        style={{ width: "300px", height: "60px" }}
      />
    </div>
    <Navbar.Brand href="#home"></Navbar.Brand>
    {/* <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav> */}
  </Navbar>
);

export default MyNavbar;

