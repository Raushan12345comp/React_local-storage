import React, { useState } from 'react';
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container
} from 'reactstrap';

import { v4 as uuidv4, v4 } from 'uuid';



const TodoFom = ({addTodos}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        if (todoString === "") {
            return alert("Please fill some value")
        }

        const todo ={
            todoString,
            id: v4()
        }
        
        addTodos(todo)

        setTodoString("")
    }


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter a todo string"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="success"
                    >
                        Add todo</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoFom
