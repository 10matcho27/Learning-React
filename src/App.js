import logo from './logo.svg';
import './App.css';
// import Article from './components/Article';
import { Article, TextInput } from './components/index';
import { useState, useEffect } from 'react';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const ids = ['10matcho27', 'deatiger', 'gaearon', 'aws', 'google', 'facebook']

  const getRemoteId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setName(data.name);
    })
    .catch(error => {
      console.log(error);
    })
  }, [id]);
  
  return(
    <div>
      <p>{id}のGithub上の名前は{name}です。</p>
      <button onClick={getRemoteId}>IDを変更</button>
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Article
          title = {'記事1'}
          content = {'内容1'}
          />
        <TextInput/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
