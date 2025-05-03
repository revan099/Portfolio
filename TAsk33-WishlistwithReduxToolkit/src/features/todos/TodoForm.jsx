import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      const response = await axios.post('http://localhost:3000/todos', { text });

      dispatch(addTodo(response.data));
      setText('');
      toast.success('Todo ugurla yuklendi');
    } catch (error) {
      toast.error('Todo elave olunarken xeta oldu');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">elave et</button>
    </form>
  );
}
