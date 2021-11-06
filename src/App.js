import './App.css';
import Home from "./products/Home"
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}
export default App;
