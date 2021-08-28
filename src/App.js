import './App.css';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useEffect, useState } from 'react';
import { getData } from './proxies/get';

function App() {

  const [data, setData] = useState();

  const fetchData = async () => {
    const json = await getData('todos')
    setData(json);
  }

  const addData = (newData) => {
    setData(data => [...data, newData])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div className="App">
    <Input addData={addData} />
    {data && data.map((data, index) => (<Card key={index} description={data.description} />))}
  </div>
}

export default App;
