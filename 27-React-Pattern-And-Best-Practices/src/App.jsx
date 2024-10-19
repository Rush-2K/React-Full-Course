import Accordion from "./components/Accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item id="experience" className="accordion-item" >
          <Accordion.Title id="experience" className="accordion-item-title">We got 20 years of experience</Accordion.Title>
          <Accordion.Content id="experience" className="accordion-item-content">
            <article>
            <p>You can&apost;t go wrong with us</p>
            <p>
              We are in the business of planning highly individualized vacation
              trips for more than 20 years.
            </p>
            </article>
          </Accordion.Content>
          
        </Accordion.Item>
        <Accordion.Item id="local-guides" className="accordion-item" >
          <Accordion.Title id="local-guides" className="accordion-item-title">We are working with local guide</Accordion.Title>
          <Accordion.Content id="local-guides" className="accordion-item-content">
            <article>
              <p>We aare not doing this along from our office</p>
              <p>
                We are working with locak guides to ensure a safe vacation
              </p>
            </article>
          </Accordion.Content>
          
        </Accordion.Item>
      </Accordion>
    </section>
  </main>
}

export default App;
