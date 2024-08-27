import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/https.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const {state} = useNavigation();
  const submit = useSubmit(); 
  const params = useParams();

  const {data, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id}),
    staleTime: 10000 //the cache data is use without refetching it behind the scenes if that data is less than 10 secs
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {         //onMutate is called right after we call mutate, manipulate the stored data(cache)
      const newEvent = data.event;

      await queryClient.cancelQueries({queryKey: ['events', params.id]})
      const previousEvent = queryClient.getQueryData(['events', params.id]);   //

      queryClient.setQueryData(['events', params.id], newEvent)

      return { previousEvent: previousEvent } //rollback
    },
    onError:(error, data, context) => {   //will be executed if the updateEvent mutation has error
      queryClient.setQueryData(['events', params.id], context.previousEvent)
    },
    onSettled: () => {    //will be execute no matter if the mutation is fail or succeed
      queryClient.invalidateQueries(['events', params.id]);
    }
  });

  function handleSubmit(formData) {
    // mutate({id: params.id, event: formData});
    // navigate('../');
    submit(formData, {method: 'PUT'}); //we are not sending http request, it will simply trigger the client side action function
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  // if(isPending) {
  //   content = 
  //   <div className='center'>
  //     <LoadingIndicator />
  //   </div>
  // }

  if(isError) {
    content = 
    (
      <>
        <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to load event. Please check your inputs and try again later..'}/>
        <div className='form-actions'>
          <Link to="../" className='button'>
            Okay
          </Link>
        </div>
      </>
    )
  }

  if(data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (<p>Sending data...</p>) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({params}) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id})
  });
}

export async function action({request, params}) {  //react router automatically return request and params
  const formData = await request.formData(); //.formdata is built in by react router
  const updatedEventData = Object.fromEntries(formData); //transform into a simple key value pair in javascript
  updateEvent({id: params.id, event: updatedEventData});
  await queryClient.invalidateQueries(['events']);
  return redirect('../'); //provide by react router, to navigate to another page
}