import React from "react";
import burger from "../img/burger.png";
import crystal from "../img/crystal3.png";
import Habits from "../img/Habits66.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>MVC Burger</h2>
									</div>
									<div>
										<button
											id="burger-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var burgerModal = document.getElementById(
													"burger"
												);
												modalBG.style.display = "block";
												burgerModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Crystal Game</h2>
									</div>
									<div>
										<button
											id="crystal-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var crystalModal = document.getElementById(
													"crystal"
												);
												modalBG.style.display = "block";
												crystalModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Habits 66</h2>
									</div>
									<div>
										<button
											id="habits-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var habitsModal = document.getElementById(
													"habits"
												);
												modalBG.style.display = "block";
												habitsModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="burger" className="modal-card">
						<div className="visual">
							<img src={burger} alt=""/>
						</div>
						<div className="modal-info">
							<h2>MVC Burger</h2>
							<div className="modal-description">
								<ul>
									<li>
									A full stack, MVC (Model-View-Controller) application that allows you to create burgers (POST),
									view a list of burgers available to eat (GET),
									devour burgers (PUT), and throw them away after devoured (DELETE).
									</li>
									<li>
										Designed with HTML5, CSS, Bootstrap,
										JS, MySQL, Express, and Handlebars.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>Comming Soon!</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={crystal} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Crystal Collectors Game</h2>
							<div className="modal-description">
								<ul>
									<li>
									At the start of the game, you are given a random number.
									This number is the Target number that you need to reach to win.
	                 To reach the Target number, click a crystal, which adds a specific number of points to Your number.
                   To win the game, Your number must match the Target number. If you go over the Target number, you lose.
                   The value of each crystal is hidden from you until you click it.
									</li>
									<li>
										Developed with HTML5, CSS, Bootstrap,
										Javascript, and JQuery.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="./estomm01.github.io/unit-4-game/"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={Habits} alt=""/>
						</div>
						<div className="modal-info">
							<h2>To-Do List</h2>
							<div className="modal-description">
								<ul>
									<li>
										A full MERN application that helps track your habits..
									</li>
									<li>
										Developed with HTML5, Animate.css, Bootstrap,
										Express, MongoDB, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="./todoList/index.html" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
