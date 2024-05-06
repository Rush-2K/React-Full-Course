import { useState } from 'react';
//all fx that started with useState is react hooks

import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
// use {} because it is a name export
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ]= useState();
  //selectedTopic is the currentState
  //setSelectedTopic a fx that update the state and retrigger the component it belongs to execute again

  function handleClick(select) {
    setSelectedTopic(select);
    console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept {...conceptItem} />
          ))}
          {/* built in map method */}
          {/* <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description} 
          image={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          
          {tabContent}
            {/* {!selectedTopic ? <p>Please select a topic.</p> : null}
            {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) : null} */}
            
        </section>
      </main>
    </div>
  );
}

export default App;
