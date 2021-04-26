import React from "react";
import "./TodoItem.css";
import { useState } from 'react';

function Todo(props) {
	const { content, id } = props;
	const [isDone, setIsDone] = useState(false);
	const styles = {
		textDecoration: isDone ? 'line-through' : '',
		textDecorationColor: isDone ? '#93ADAD' : '',
	};
	const barIsDone = () => setIsDone(!isDone);
	return (
		<div className="content-todos" style={styles} onClick={barIsDone}>
			{content}
			<button className="destroy" onClick={() => props.onDelete(id)}>
				Sil
			</button>
		</div>
	);
}

export default Todo;
