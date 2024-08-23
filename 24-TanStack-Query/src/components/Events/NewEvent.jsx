import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query'; //to send data 

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/https.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/https.js';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {      //will be executed if the mutation is succeeed
      queryClient.invalidateQueries({
        queryKey: ['events']
      });    //tells react that data fetched by certain query is outdated(based on the querykey, sort of like telling them). so it should be refetched/updated.
      navigate('/events');
    }
  });

  function handleSubmit(formData) {
    mutate({
      event: formData
    });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
        
      </EventForm>
      {isError && <ErrorBlock title="Failed to create event" message={error.info?.message || 'Failed to create event.'}/>}
    </Modal>
  );
}
