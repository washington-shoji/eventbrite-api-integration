import React, {FC} from 'react';
import Image from 'next/image';
import {format} from 'date-fns';

import styles from './EventCard.module.css';
import {EventbriteEvent} from '../../interface';

interface Props {
	event: EventbriteEvent;
}

const EventCard: FC<Props> = ({event}) => {
	return (
		<div className={styles.container}>
			<div className={styles.cardDetail}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={event.logo.original.url}
						alt={event.name.text}
					/>
					{/* <span className={styles.tag}>Inform</span>
					<span className={styles.tag}>Leadership</span> */}
					<div className={styles.name}>{event.name.text}</div>
					<p className={styles.description}>{event.description.text}</p>
					<div className={styles.date}>
						{`Event date: ${format(new Date(event.start.local), 'dd.MM.yyyy')}`}
					</div>
					<div className={styles.date}>
						{`Time: ${format(new Date(event.start.local), 'HH:mm')} - ${format(
							new Date(event.end.local),
							'HH:mm'
						)} AED`}
					</div>
					<a href={event.url} target='_blank' rel='noreferrer'>
						<button className={styles.registerButton}>Register</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
