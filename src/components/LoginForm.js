import { Form, Button } from 'react-bootstrap'
import Notification from '../components/Notification'

export default function LoginForm(props) {
    return (
        <div>
          <Notification message={props.errorMessage}/>
          <Form onSubmit={props.login}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={props.handleEmailChange} 
                    id="email" 
                    value={props.email} 
                    type="email" 
                    placeholder="Enter email" 
                    required
                />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={props.handlePasswordChange} 
                    id="password" 
                    value={props.password} 
                    type="password" 
                    placeholder="Password" 
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
    )
}
