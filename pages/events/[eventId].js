import { Fragment } from 'react'
import {useRouter} from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from './../../components/ui/error-alert'
import Button from './../../components/ui/Button'

const EventDetailPage = () => {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)
    if (!event) {
        return (
			<Fragment>
				<ErrorAlert>
					<p>No event found!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Event</Button>
				</div>
			</Fragment>
		) 
    }

    return (
		<Fragment>
			<EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.imageAlt}
            />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	)
}

export default EventDetailPage
