import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // Будет вызван, когда React соединил компонент с дом-деревом
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    // prev - предыдущее состояние стейта, возвращаю новый массив, основываясь на предыдущем стейте
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = true
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return( 
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  )
}