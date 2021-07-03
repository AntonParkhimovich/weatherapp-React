import React, {useState} from 'react';
import './style.css'
import Header from './Header';
import Main from './Main';


function App() {
  const [response, setResponse] = useState({})
  const [history, setHistory] = useState(false)
  return (
    <>
   <Header response={response} 
          setResponse={setResponse}
          history={history}
          setHistory={setHistory}
   />
   <Main data ={response}/>
   </>
  );
}

export default App;
