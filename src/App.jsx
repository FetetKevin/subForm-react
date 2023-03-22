import "./App.css";
import Info from './components/Info'
import Form from './components/Form'
import Api from './Api'

function App() {
    return(
      <>
        <Info />
        <Form data={Api}/>
      </>
    )
}

export default App;
