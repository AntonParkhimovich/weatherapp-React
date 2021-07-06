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
          SetHistory={setHistory}
          history={history}
   />
   <Main data ={response}
        history={history}
   />
   </>
  );
}

export default App;
