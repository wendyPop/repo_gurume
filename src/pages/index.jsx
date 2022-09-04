import React, { useEffect } from 'react'
import {Badge, Button, Stack} from 'react-bootstrap'
import styles from "@/css/Home.module.scss"

const Home = () => {

	// 본문 목록조회
	/*useEffect(() => {
		Promise.all([
			fetch('http://localhost:9000/stores').then((res) => res.json()),
			fetch('http://localhost:9000/survey').then((res) => res.json())
		])
			.then(([answer, survey]) => {
				setAnswer(answer.data)
				setSurvey(survey)
			})
	}, [])*/


	return (
		<>
			<main>
				<div className={styles.test}>본문</div>
				<Badge pill bg="success">완료</Badge>

				<Stack direction="horizontal" gap={2}>
					<Button as="a" variant="primary">
						Button as link
					</Button>
					<Button as="a" variant="success">
						Button as link
					</Button>
				</Stack>
			</main>
		</>
	)
}

export default Home
