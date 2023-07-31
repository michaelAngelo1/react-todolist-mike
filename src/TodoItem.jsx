export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li key={id}>
            <label>
                <input 
                type="checkbox" 
                checked={completed} 
                // onChange runs toggleTodo which checks if a list is checked or not
                onChange = {e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)} 
                className="btn btn-danger">Delete
            </button>
        </li>
    )
}