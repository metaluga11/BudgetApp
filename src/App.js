import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App(props) {

  console.log(props)
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content data = {props.data} />
      <Footer />
    </div>
  );
}

export default App;
