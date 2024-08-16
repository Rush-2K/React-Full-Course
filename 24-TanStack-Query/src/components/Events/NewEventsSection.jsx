import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/https.js'; 

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({      //there's a lot of data that can be fetch
    queryKey: ['events'],     //every request should have querykey to cache the data
    queryFn: fetchEvents,     //define the actual code that will define the request
    staleTime: 5000,          //within that period it will use cache data, after that it will send the request back
    gcTime: 3000              //determines how long the data is kept in cache
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock 
        title="An error occurred" 
        message={error.info?.message || 'Failed to fetch events.'} 
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
