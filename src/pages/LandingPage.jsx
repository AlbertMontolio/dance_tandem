import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import SelectFiguresPage from './select_figures_page/SelectFiguresPage'

const StyledLandingPage = styled.div`
	position: absolute;
	z-index: 3;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.5);
	color: white;
	overflow: hidden;
`
const StyledOptions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
`


const StyledOption = styled(NavLink)`
	background-color: white;
	margin-bottom: 20px;
	color: black;
	border-radius: 10px;
	padding: 5px 10px;
	font-size: 20px;
	font-weight: bold;
	width: 100%;
	text-align: center;
	text-underscore: none;
`

const StyledImage = styled.div`
	// position: absolute;
	width: 100%;
	height: 100%;
`

const LandingPage = () => {
	return (
	<div>
		<StyledLandingPage>
			<div>
				What do you want to practice?
			</div>
			<StyledOptions>
				<StyledOption to='/select_figures/salsa_la'>SALSA LA</StyledOption>
				<StyledOption to='/select_figures/salsa_cubana'>SALSA CUBANA</StyledOption>
				<StyledOption to='/select_figures/bachata'>BACHATA</StyledOption>
				<StyledOption to='/select_figures/kizomba'>KIZOMBA</StyledOption>
				<StyledOption to='/select_figures/more'>MORE</StyledOption>
			</StyledOptions>
		</StyledLandingPage>
		<StyledImage>
			<img src='https://res.cloudinary.com/montolio/image/upload/v1550595412/Portfolio/camps/bali.png' alt="pic"/>
		</StyledImage>
	</div>
	)
}

export default LandingPage
