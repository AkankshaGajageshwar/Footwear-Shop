import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/css/style.css';
//changes
export default function Header() {

	const count = useSelector((state) => state.cart.products)
	return (
		<div id="page">
			<nav className="colorlib-nav" role="navigation">
				<div className="top-menu">
					<div className='container'>
						<div className="row">
						<div className="col-sm-7 col-md-9">
							<div id="colorlib-logo"><Link to={'/'}>MyFootwear 11 12</Link></div>
						</div>
							<div className="col-sm-5 col-md-3">
								<form action="#" class="search-wrap">
									<div className="form-group">
										<input type="search" class="form-control search" placeholder="Search" />
										<button class="btn btn-primary submit-search text-center" type="submit"><i className="fas fa-search"></i>
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 text-start menu-1">
								<ul>
								<li className="active">
									<Link to={'/'}><img src={require('../assets/images/logo_main.jpg')} alt="" style={{width:"80px"}}/></Link></li>
									<li class="active"><Link to={'/'}>Home</Link></li>
									<li><Link to={'/allproducts'}>All Products</Link></li>
									<li><Link to={'/about'}>About</Link></li>
									<li><Link to={'/contact'}>Contact</Link></li>
									<li className="cart"><Link to={'/cart'}><button type="button" class="btn btn-light position-relative"><i className="fa-solid fa-cart-shopping"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count.length}</span></button>Cart [{count.length}]</Link></li>
									
									<li><Link to={'/adminlogin'}>Admin Login</Link></li>
								</ul>
							</div>
						</div>
						</div>
					
				</div>
				<div className="sale">
					<div class="container">
						<div class="row">
							<div class="col-sm-8 offset-sm-2 text-center">
								<div class="row">
									<div class="owl-carousel2">
										<div class="item">
											<div class="col">
												<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
											</div>
										</div>
										<div class="item">
											<div class="col">
												<h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

