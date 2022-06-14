import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from 'react-redux'
import { setAddress, logout } from '../../redux/auth/actions'
import { useNavigate } from "react-router-dom"
import {
     Container,
     Navbar,
     Nav,
     NavDropdown
} from 'react-bootstrap'

export default function Header () {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const address = useSelector((state) => state.auth.address);
     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

     const minimum = (address) => {
          const temp = String(address);
          return temp.slice(0, 4) + "..." + temp.slice(39, 42);
      };

     const onLogout = () => {
          dispatch(logout());
     }

     const onConnectClick = async () => {
          console.log("Chain ID: ", window.ethereum.chainId);
  
          if (typeof window.ethereum === "undefined") {
              toast.warning("Please install MetaMask!", {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              return;
          }
      
          if (window.ethereum.chainId !== "0x13881") {
              toast.warning("Please choose the Mumbai testnet!", {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              return;
          }
      
          if (window.ethereum.selectedAddress !== null) {
              dispatch(setAddress(window.ethereum.selectedAddress));
              console.log("MetaMask was already connected.");
              return;
          }
  
          if (window.ethereum.selectedAddress === null) {
              try {
                  console.log("Connecting wallet...");
                  await window.ethereum.request({ method: "eth_requestAccounts" });
                  dispatch(setAddress(window.ethereum.selectedAddress));
              } catch (err) {
                  console.log("Error: ", err);
              }
          }
      }
     return (
          <div>
               <ToastContainer />

               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home">Battle v60</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   {/* <Nav.Link href="#features">Features</Nav.Link>
                                   <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                              </Nav>
                              <Nav>
                                   <Nav.Link onClick={() => navigate('/mint')}>Mint</Nav.Link>
                                   <Nav.Link onClick={() => navigate('/rooms')}>Rooms</Nav.Link>
                                   {address ? (
                                        <Nav.Link>{minimum(address)}</Nav.Link>
                                   ) : (
                                        <Nav.Link onClick={() => onConnectClick()}>Connect</Nav.Link>
                                   )}
                                   
                                   <NavDropdown title="Auth" id="collasible-nav-dropdown">
                                        {isAuthenticated ? (
                                             <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                                        ) : (
                                             <>
                                                  <NavDropdown.Item onClick={() => navigate('/login')}>Sign In</NavDropdown.Item>
                                                  <NavDropdown.Item onClick={() => navigate('/register')}>Sign Up</NavDropdown.Item>
                                             </>
                                        )}
                                        
                                   </NavDropdown>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     )
}