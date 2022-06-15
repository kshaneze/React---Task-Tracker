import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: '11111111111222222222222',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 3,
      text: '1111111111',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 4,
      text: '2222222',
      day: 'Feb 5th at 2:30',
      reminder: false,
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
