import './App.css';
import Layout from './Layout/Layout';
import Home from './Components/Home';
import Filter from './Components/Filter';
import Detail from './Components/Detail';

function App() {
  return (
    <router>
    <Layout>
     {/*<Filter />*/}
     {/*<Home />*/}
     <Detail />
    </Layout>
    </router>
  );
}

export default App;
