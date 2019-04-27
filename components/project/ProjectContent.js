import React from 'react'
import * as Icon from 'react-feather'
import Link from 'next/link'

export default function ProjectContent() {
    return (
        <section className="works-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/1.jpg")} alt="image" />
                                <Link href="#">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/2.jpg")} alt="image" />
                                <Link href="#">
                                    <a className="icon"><Icon.Settings /></a>
                                </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/3.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>
							<div className="works-content">
                                <h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/4.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/5.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/1.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/2.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/3.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../images/works-image/4.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
			<div className="shape2 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
			<div className="shape7"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
			<div className="shape4"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
		</section>
    )
}
