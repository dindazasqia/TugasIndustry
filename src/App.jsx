import { useState } from 'react';
import { Container, Form, Button, ListGroup, ListGroupItem, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container className="mt-4" style={{ backgroundColor: '#006FF9', padding: '20px', borderRadius: '8px', color: '#fff' }}>
      <h1 className="mb-4 text-center text-white">To-Do List</h1>
      <InputGroup className="mb-3 mx-auto" style={{ maxWidth: '500px', border: '2px solid #fff', borderRadius: '8px', overflow: 'hidden' }}> 
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ backgroundColor: '#fff', color: '#000', border: 'none' }} 
        />
        <Button variant="primary" onClick={handleAddTask} style={{ borderRadius: '0' }}>Add</Button> 
      </InputGroup>
      <ListGroup className="mx-auto" style={{ maxWidth: '500px' }}>
        {tasks.map((task, index) => (
          <ListGroupItem
            key={index}
            className={`d-flex justify-content-between align-items-center mb-2`}
            style={{ 
              backgroundColor: '#006FF9', 
              borderRadius: '8px', 
              border: '2px solid #fff',
              color: '#fff' 
            }}
          >
            <span className={task.completed ? 'text-decoration-line-through' : ''} style={{ color: '#fff' }}>{task.text}</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleCompleteTask(index)}
              style={{
                backgroundColor: task.completed ? '#fff' : '#006FF9',
                color: task.completed ? '#006FF9' : '#fff',
                border: task.completed ? '2px solid #006FF9' : 'none',
                width: '100px',
                transition: 'background-color 0.3s, color 0.3s, border 0.3s'
              }}
              className={task.completed ? 'undo-btn' : 'complete-btn'}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;
