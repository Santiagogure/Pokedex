import logo from './logo.svg';
import './App.css';
import { AppRoute } from './componentes/appRoute';
import DataProvider from './context/dataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
     <AppRoute/>
     </DataProvider>
    </div>
  );
}

export default App;
