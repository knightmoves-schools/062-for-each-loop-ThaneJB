function markAsDone(todos) {
    const updatedTodos = [];
    
    todos.forEach((todo,index) => {
        updatedTodos[index] = `done - ${todo}`;
    });

    return updatedTodos;
}
