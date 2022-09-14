


export default function TodoItem({todo}){

    return (
      <div>
        <tr>
        
            <th>{todo.id}</th>
            <th>{todo.title}</th>
            <th>{todo.status ? "done" : "pending"}</th>
            <th>{"delete"}</th>
          
        </tr>
      </div>
    );
}