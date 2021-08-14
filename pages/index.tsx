import type {NextPage} from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {EventbriteEvent} from './../interface';
import EventCard from './../components/eventCard/EventCard';

// import dotenv from 'dotenv-safe';

// dotenv.config();

const endPoint = 'https://www.eventbriteapi.com/v3';
const accessToken = process.env.ACCESS_TOKEN;
const id = process.env.ENTITY_ID;

export const getStaticProps = async () => {
	const res = await fetch(
		`${endPoint}/organizations/${id}/events/?status=live`,
		{
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const data = await res.json();

	const events: EventbriteEvent[] = data.events;

	return {
		props: {events},
	};
};

const Home: NextPage<{events: Array<EventbriteEvent>}> = ({
	events,
}: {
	events: Array<EventbriteEvent>;
}) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{events.map((item) => {
					return <EventCard key={item.id} event={item} />;
				})}
			</main>
		</div>
	);
};

export default Home;
