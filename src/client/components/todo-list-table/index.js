import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

function TodoListTable({ onDelete, onUpdate, todos }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Description</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>
              <Checkbox
                checked={todo.isCompleted}
                onChange={(e) => {
                  onUpdate({ id: todo.id, isCompleted: e.target.checked });
                }}
              />
            </TableCell>
            <TableCell>
              <span
                className={classnames({ [styles.completed]: todo.isCompleted })}
              >
                {todo.description}
              </span>
            </TableCell>
            <TableCell align="right">
              <IconButton onClick={() => onDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
TodoListTable.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  todos: PropTypes.array,
};

export default TodoListTable;
