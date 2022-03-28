import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/templates/Layout/Layout'
import { ResponsiveNavBar } from '../../components/organisms/Navbar/Navbar'
import { StarRating } from '../../components/molecules/StarRating/StarRating'
import { TrackForm } from '../../components/organisms/TrackForm/TrackForm'
import { getUrl } from 'Helpers/pageScraping.js'
import { postVacancy } from '../../modules/vacancies/vacancy.request'
import { useAuth0 } from '@auth0/auth0-react'
import { validateObj } from '../../utils/validations/inputValidation'
import CustomizedSnackbars from '../../components/organisms/CustomSnackbar/CustomSnackbar'

function TrackNew() {
	const [inputValue, setInputValue] = useState({})
	const [rating, setRating] = useState('3')
	const { getAccessTokenSilently } = useAuth0()
	const [alert, setAlert] = useState({ message: '', type: 'error' })
	const [open, setOpen] = useState(false)

	async function sendFormData(event) {
		console.log(inputValue.remote)
		event.preventDefault()
		const vacancyToCreate = {
			title: inputValue.position,
			link: inputValue.link,
			company: inputValue.company,
			salary_from: inputValue.offeredSalary,
			salary_to: inputValue.offeredSalary + 10,
			currency: inputValue.currency,
			date_application: new Date().toISOString().slice(0, 10),
			interest: parseInt(rating),
			notes: inputValue.notes,
			user_id: 1,
			remote: !!inputValue.remote,
			status: 'interested',
		}

		const validation = validateObj('vacancySchema', vacancyToCreate)
		setVacancy(validation, vacancyToCreate)
	}

	const activeAlert = (message, type) => {
		setAlert({ message, type })
		setOpen(true)
	}

	const ShowValidationErrors = (validations) => {
		let currentValidations = 'You have the follow errors: \n\r'
		validations.forEach((validation) => {
			currentValidations += `${validation.key}: ${validation.message}. \n\r`
		})
		activeAlert(currentValidations, 'error')
	}

	useEffect(async () => {
		const response = await getUrl()
		setInputValue({
			...inputValue,
			...response,
		})
	}, [])

	const setVacancy = async (validation, vacancyToCreate) => {
		try {
			if (validation === 'ok') {
				const token = await getAccessTokenSilently()
				console.log('token', token)
				let result = await postVacancy(vacancyToCreate, token)
				if (result) {
					activeAlert(
						'The vacancy  was registered successfully',
						'success'
					)
				}
			} else {
				ShowValidationErrors(validation)
			}
		} catch (error) {
			activeAlert(error, 'error')
		}
	}

	return (
		<Layout>
			<ResponsiveNavBar title='New Tracking' />
			<div className='TrackForm__container'>
				<TrackForm
					inputValue={inputValue}
					setInputValue={setInputValue}
					onSubmit={sendFormData}>
					<StarRating rating={rating} setRating={setRating} />
				</TrackForm>
				<CustomizedSnackbars
					type={alert.type}
					message={alert.message}
					status={open}
					resetOpen={setOpen}
				/>
			</div>
		</Layout>
	)
}

export { TrackNew }
