import React  from 'react';
import { List } from 'semantic-ui-react';

const Todo = (props) => {

    return(
        <List.Item
        onClick = {()  => props.toggleTask(props.item.id)}
        className = {`item${props.item.completed ? " completed" : ""}`}>
            <List.Content>
                <List.Description>{props.item.task}</List.Description>
            </List.Content>
        </List.Item>
    );
};

export default Todo;