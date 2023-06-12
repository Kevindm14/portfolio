import {useState} from "react";

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState({
		menu: false,
	});

	const openModal = (key: string) => {
		setIsModalOpen((prevModals) => ({
			...prevModals,
			[key]: true,
		}));
	}
	const closeModal = (key: string) => {
		setIsModalOpen((prevModals) => ({
			...prevModals,
			[key]: false,
		}));
	}

	return {
		isModalOpen,
		openModal,
		closeModal
	}
}