import { Title } from 'components/title';
import { Home } from 'pages/home';
import './App.css';

function App() {
  return (
    <div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-900 via-sky-700 to-purple-900 p-4 flex flex-col flex-none items-center justify-center">
      <Title />
      <Home />
    </div>
  );
}

export default App;
