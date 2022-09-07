import React, {useState} from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'
import styles from "@/css/Home.module.scss"
import Modal from "@/compo/Modal"

const Home = ({ posts }) => {

	const [ show, setShow ] = useState(false)
	const [ detail, setDetail ] = useState({})
	const hideModal = () => {
		setShow(false)
	}

	const openModal = v => {
		setShow(true)
		setDetail(( prev ) => {
			return { ...prev, ...v }
		})
	}

	return (
		<>
			<Modal show={ show} onHide={ hideModal } detailInfo={ detail } />
			<main>
				<h2 className="text-lg-start mb-lg-5">EAT</h2>
				<Container>
					<Row className="justify-content-md-center">
						{ posts && posts.map((v, i) => {
							return (
								<Col lg="3">
									<Card className={`${styles.card} bg-dark text-white m-5`} onClick={ () => openModal(v) }>
										<Card.Img src={v.thumb} alt="Card image"/>
									</Card>
								</Col>
							)
						})
						}
					</Row>
				</Container>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:9000/stores/')
	const posts = await res.json()
	return {
		props: {
			posts
		}
	}
}


export default Home
