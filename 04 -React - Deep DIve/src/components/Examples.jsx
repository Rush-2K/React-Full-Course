import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples () {
    const [ selectedTopic, setSelectedTopic ]= useState();
  //selectedTopic is the currentState
  //setSelectedTopic a fx that update the state and retrigger the component it belongs to execute again

    function handleClick(select) {
        setSelectedTopic(select);
        console.log(selectedTopic);
    }

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
        <Section title = "Examples" id="examples">
            <Tabs 
            // ButtonsContainer="menu"
            // accepts component identifier as a value for the prop
            buttons={
            <>
                <TabButton 
                    isSelected={selectedTopic === 'components'} 
                    onClick={() => handleClick('components')}>Components
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'jsx'} 
                    onClick={() => handleClick('jsx')}>JSX
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'props'} 
                    onClick={() => handleClick('props')}>Props
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'state'} 
                    onClick={() => handleClick('state')}>State
                </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}