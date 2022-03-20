import React from 'react';
import styles from './Sidebar.module.scss';
import { GoClock, GoOctoface, GoSearch } from 'react-icons/go';
import { RiCloseCircleLine } from 'react-icons/ri';

export interface INavbarProps {
	sidebarOpen: boolean;
	closeSidebar(): void;
}

export function Sidebar({
	sidebarOpen,
	closeSidebar,
}: INavbarProps): JSX.Element {
	console.log(sidebarOpen);
	return (
		<div
			className={` ${sidebarOpen ? styles.sidebar_responsive : ''} ${
				styles.sidebar
			}`}
			id='sidebar'
		>
			<div className={styles.sidebar__title}>
				<div className={styles.sidebar__img}>
					<GoOctoface />
					<h1>JSD</h1>
				</div>
				<RiCloseCircleLine
					className={styles.icon}
					id='sidebarIcon'
					onClick={closeSidebar}
				/>
			</div>

			<div className={styles.sidebar__menu}>
				<div className={`${styles.sidebar__link} ${styles.active_menu_link}`}>
					<a href='#'>Dashboard</a>
				</div>
				<h2>MNG</h2>
				<div className={styles.sidebar__link}>
					<GoSearch className={styles.link_icon} />
					<a href='#'>Admin Management</a>
				</div>
				<div className={styles.sidebar__link}>
					<GoSearch className={styles.link_icon} />
					<a href='#'>Company Management</a>
				</div>
				<div className={styles.sidebar__link}>
					<GoSearch className={styles.link_icon} />
					<a href='#'>Employee Management</a>
				</div>
				<h2>LEAVE</h2>
				<div className={styles.sidebar__link}>
					<GoSearch className={styles.link_icon} />
					<a href='#'>Request</a>
				</div>
				<div className={styles.sidebar__link}>
					<GoSearch className={styles.link_icon} />
					<a href='#'>Contact</a>
				</div>
				<div className={styles.sidebar__logout}>
					<GoSearch className={styles.logout_link_icon} />
					<a href='#'>Logout</a>
				</div>
			</div>
		</div>
	);
}
