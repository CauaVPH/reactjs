import './App.css';
import logo from './Rectangle1.svg'
import Form from './components/formlc';

function App() {
  return (

    <div className="App">

        <section className="textsMobile">

          <h1>Welcome <br></br><b>Back.</b></h1>

          <h5>Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br/>
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
         </h5>

        </section>
       
       <div className="divText">

         <section className="texts">

           <h1>Welcome <br></br><b>Back.</b></h1>

           <h5>Lorem ipsum dolor sit amet,consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
           </h5>

         </section>

         <img width="60px" src={logo} alt="imagem"></img>

       </div>

       <div className="textLogin">
         <h2>Login</h2>
         <h5>Don't have a account? <b>Create your here!</b></h5>
       </div>

       <Form/>
       
    </div>
  );
}

export default App;
