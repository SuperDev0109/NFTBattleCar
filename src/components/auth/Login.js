import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../redux/auth/actions'
import { useNavigate, Navigate } from "react-router-dom"
import Header from "../layout/Header"
import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Card
} from 'react-bootstrap'

export default function Login() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

     useEffect(() => {

     }, []);

     const [formData, setFormData] = useState({
          email: '',
          password: ''
     })

     const { email, password } = formData;

     const onChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     }

     const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
          } else {
               event.preventDefault();
               event.stopPropagation();
               const data = {
                    email,
                    password
               }
               dispatch(login(data));
          }

          setValidated(true);
     };

     if (isAuthenticated) {
          return <Navigate to="/rooms" />
     }

     return (
          <div>
               <Header />
               <div className="container">
               <Card style={{ 
                    width: '500px', 
                    position: 'fixed',
                    top: "45%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)' 
                    }}>
                    <Card.Body>
                         <Card.Title style={{ fontSize: '35px' }}>Login</Card.Title>
                         <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Row className="mt-3">
                                   <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                             <Form.Control
                                                  type="text"
                                                  placeholder="Email"
                                                  aria-describedby="inputGroupPrepend"
                                                  required 
                                                  name="email" 
                                                  onChange={onChange}
                                             />
                                             <Form.Control.Feedback type="invalid">
                                                  Please enter a email.
                                             </Form.Control.Feedback>
                                        </InputGroup>
                                   </Form.Group>
                              </Row>
                              <Row className="mt-3">
                                   <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup hasValidation>
                                             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                  <Form.Control
                                                       type="text"
                                                       placeholder="Password"
                                                       aria-describedby="inputGroupPrepend"
                                                       required 
                                                       name="password"
                                                       onChange={onChange}
                                                  />
                                                  <Form.Control.Feedback type="invalid">
                                                       Please choose a password.
                                                  </Form.Control.Feedback>
                                             </InputGroup>
                                   </Form.Group>
                              </Row>
                              <Row className="mt-4">
                                   <Form.Group controlId="validationCustomUsername">
                                        <center><Button type="submit" style={{ textAlign: 'center' }}>Login</Button></center>
                                   </Form.Group>
                              </Row>
                         </Form>
                    </Card.Body>
               </Card>
               
               </div>
          </div>
     )
}