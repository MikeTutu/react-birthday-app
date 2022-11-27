import { useState } from 'react';
import './index.css';
import List from './List'
import data from './data';

function App() {
  const [people, setPeople] = useState(data)
  const removeAll =()=>{
    setTimeout(setPeople([]),10000)
  }
  return (
    <main>
      <div className=" w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{people.length} birthdays</h5>
          <button type='button' onClick={removeAll} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Clear all
          </button>
        </div>
        <div className="flow-root">
          <List people={people}/>
        </div>
      </div>
    </main>
  );
}

export default App;
