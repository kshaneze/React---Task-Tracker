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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
