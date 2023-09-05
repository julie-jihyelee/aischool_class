import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Delete = () => {
  return (
    <div>
      <h1>회원탈퇴</h1>
      <br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          탈퇴하기
        </Button>
      </Form>
  </div>
  )
}

export default Delete