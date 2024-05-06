
//all fx that started with useState is react hooks

import componentsImg from './assets/components.png';

// use {} because it is a name export
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header';
import Examples from './components/Examples.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
