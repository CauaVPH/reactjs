import './App.css';
import HelloWorld from './components/helloWorld';
import PropsFunc from './components/Props';
import User from './components/Users';
import Header from './components/header';
import Lista_users from './components/list';

function App() {
  const name_user = "Vinicius"

  return (
    <div className="App">
      <Header/>
      <HelloWorld/>

      <PropsFunc nome = {name_user}/>

      <User nome = "Caua" nome2 = "ProgramadorVini"/>
      <Lista_users/>

    </div>
  );
}

export default App;
