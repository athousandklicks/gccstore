<template>
<!-- Main wrapper -->
	<div>
		<!-- Header -->
		<header id="wn__header" class="header__area header__absolute sticky__header">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6 col-sm-6 col-6 col-lg-2">
						<div class="logo">
							<a href="/" >
								<img src="/images/logo/logo.png" alt="logo images">
							</a>
						</div>
					</div>
					<div class="col-lg-8 d-none d-lg-block">
						<nav class="mainmenu__nav">
							<ul class="meninmenu d-flex justify-content-start">
								<li class="drop with--one--item">
                                    <router-link :to="{ name: 'home' }">Home
                                    </router-link>
                                </li>
                                <li class="drop"><a>About</a>
									<div class="megamenu dropdown">
										<ul class="item item01">

											<li class="label2"><a>Ministry</a>
												<ul>
													<li><router-link :to="{ name: 'believe' }">
                                                        Believe
                                                        </router-link></li>
													<li><router-link :to="{ name: 'vision' }">
                                                        Vision
                                                        </router-link></li>
                                                    <li><router-link :to="{ name: 'mission' }">
                                                        Mission
                                                        </router-link></li>
												</ul>
											</li>

                                            <li class="label2"><a>Pastors</a>
												<ul>
													<li><router-link :to="{ name: 'tunde' }">Pst. Tunde Ayeni</router-link></li>
													<li><router-link :to="{ name: 'sharon' }">Pst. Sharon Ayeni</router-link></li>

												</ul>
											</li>


										</ul>
									</div>
								</li>

								<li class="drop"><a>Store</a>
									<div class="megamenu mega03">
										<ul class="item item03">
											<li class="title">Audio Messages</li>

											<li><router-link :to="{ name: 'cdsermons' }">CD Sermons </router-link></li>
											<li><router-link :to="{ name: 'digitalsermons' }">Digital Sermons </router-link></li>
											<li><router-link :to="{ name: 'cdalbums' }">CD Albums </router-link></li>
                                            <li><router-link :to="{ name: 'feature' }">Featured </router-link></li>
                                            <li><router-link :to="{ name: 'popular' }">Popular </router-link></li>
											<li><router-link :to="{ name: 'resourcebundles' }">Resource Bundles </router-link></li>

										</ul>
										<ul class="item item03">
											<li class="title">Books</li>
											<li><router-link :to="{ name: 'books' }">Tunde Ayeni</router-link></li>

										</ul>
										<ul class="item item03">
											<li class="title">Music</li>
                                            <li><router-link :to="{ name: 'allmusic' }">All</router-link></li>
                                            <li><router-link :to="{ name: 'lange' }">Solomon Lange</router-link></li>
											<li><router-link :to="{ name: 'japhy' }">Japhy Davies </router-link></li>
											<li><router-link :to="{ name: 'opera' }">Opera Davies</router-link></li>
											<li><router-link :to="{ name: 'joey' }">Joey</router-link></li>
											<li><router-link :to="{ name: 'pv' }">PV</router-link></li>
                                            <li><router-link :to="{ name: 'steve' }">Steve Willies</router-link></li>
                                            <li><router-link :to="{ name: 'emmy' }">Emmy Abraham</router-link></li>
										</ul>
									</div>
								</li>

								<li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                                <li><router-link :to="{ name: 'donate' }"><span class="donate">Donate</span></router-link></li>
							</ul>
						</nav>
					</div>
					<div class="col-md-6 col-sm-6 col-6 col-lg-2">
						<ul class="header__sidebar__right d-flex justify-content-end align-items-center">
							<li class="shop_search"><a class="search__active" href="#"></a></li>
                            <li class="wishlist"><a href="#"></a></li>
							<li class="shopcart"><a class="cartbox_active" href="#"><span class="product_qun">3</span></a>
								<!-- Start Shopping Cart -->
								<div class="block-minicart minicart__active">
									<div class="minicart-content-wrapper">
										<div class="micart__close">
											<span>close</span>
										</div>
										<div class="items-total d-flex justify-content-between">
											<span>3 items</span>
											<span>Cart Subtotal</span>
										</div>
										<div class="total_amount text-right">
											<span>$66.00</span>
										</div>
										<div class="mini_action checkout">
											<a class="checkout__btn" href="cart.html">Go to Checkout</a>
										</div>
										<div class="single__items">
											<div class="miniproduct">
												<div class="item01 d-flex">
													<div class="thumb">
														<a href="product-details.html"><img src="images/product/sm-img/1.jpg" alt="product images"></a>
													</div>
													<div class="content">
														<h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
														<span class="prize">$30.00</span>
														<div class="product_prize d-flex justify-content-between">
															<span class="qun">Qty: 01</span>
															<ul class="d-flex justify-content-end">
																<li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
																<li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
															</ul>
														</div>
													</div>
												</div>
												<div class="item01 d-flex mt--20">
													<div class="thumb">
														<a href="product-details.html"><img src="images/product/sm-img/3.jpg" alt="product images"></a>
													</div>
													<div class="content">
														<h6><a href="product-details.html">Impulse Duffle</a></h6>
														<span class="prize">$40.00</span>
														<div class="product_prize d-flex justify-content-between">
															<span class="qun">Qty: 03</span>
															<ul class="d-flex justify-content-end">
																<li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
																<li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
															</ul>
														</div>
													</div>
												</div>
												<div class="item01 d-flex mt--20">
													<div class="thumb">
														<a href="product-details.html"><img src="images/product/sm-img/2.jpg" alt="product images"></a>
													</div>
													<div class="content">
														<h6><a href="product-details.html">Compete Track Tote</a></h6>
														<span class="prize">$40.00</span>
														<div class="product_prize d-flex justify-content-between">
															<span class="qun">Qty: 03</span>
															<ul class="d-flex justify-content-end">
																<li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
																<li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="mini_action cart">
											<a class="cart__btn" href="cart.html">View and edit cart</a>
										</div>
									</div>
								</div>
								<!-- End Shopping Cart -->
							</li>
							<li class="setting__bar__icon"><a class="setting__active" href="#"></a>
								<div class="searchbar__content setting__block">
									<div class="content-inner">



										<div class="switcher-currency">
											<strong class="label switcher-label">
												<span>My Account</span>
											</strong>
											<div class="switcher-options">
												<div class="switcher-currency-trigger">
													<div class="setting__menu">

														<span>
                                                            <router-link :to="{ name: 'login' }" v-if="!isLoggedIn">Sign In
                                                            </router-link>
                                                        </span>

                                                        <span v-if="isLoggedIn">
                                                            <router-link :to="{ name: 'userboard' }" v-if="user_type == 0"> Hi, {{name}}
                                                            </router-link>

                                                            <router-link :to="{ name: 'admin' }" v-if="user_type == 1"> Hi, {{name}}
                                                            </router-link>
                                                        </span>


														<span><router-link :to="{ name: 'register' }" v-if="!isLoggedIn" >Create An Account</router-link></span>

                                                        <span><a @click="logout">
                                                            Logout
                                                        </a>

                                                        </span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- Start Mobile Menu -->
				<div class="row d-none">
					<div class="col-lg-12 d-none">
						<nav class="mobilemenu__nav">
							<ul class="meninmenu">
								<li><router-link :to="{ name: 'home' }">Home</router-link></li>
								<li><a href="#">About</a>
									<ul>
										<li><a>Ministry</a>
											<ul>
												<li><router-link :to="{ name: 'believe' }">Believe</router-link></li>
													<li><router-link :to="{ name: 'vision' }">Vision</router-link></li>
                                                    <li><router-link :to="{ name: 'mission' }">Mission</router-link></li>
											</ul>
										</li>

                                        <li><a>Pastors</a>
											<ul>
													<li><router-link :to="{ name: 'tunde' }">Pst. Tunde Ayeni</router-link></li>
													<li><router-link :to="{ name: 'sharon' }">Pst. Sharon Ayeni</router-link></li>

												</ul>
										</li>

									</ul>
								</li>

                                <li><a href="#">Store</a>
									<ul>

										<li><a >Audio Messages</a>
											<ul>

                                                <li><router-link :to="{ name: 'cdsermons' }">CD Sermons </router-link></li>
                                                <li><router-link :to="{ name: 'digitalsermons' }">Digital Sermons </router-link></li>
                                                <li><router-link :to="{ name: 'cdalbums' }">CD Albums </router-link></li>
                                                <li><router-link :to="{ name: 'feature' }">Featured </router-link></li>
                                                <li><router-link :to="{ name: 'popular' }">Popular </router-link></li>
                                                <li><router-link :to="{ name: 'resourcebundles' }">Resource Bundles </router-link></li>
											</ul>
										</li>

                                        <li><a>Books</a>
											<ul>
                                                <li><router-link :to="{ name: 'books' }">Tunde Ayeni</router-link></li>
											</ul>
										</li>

                                        <li><a>Music</a>
											<ul>

                                            <li><router-link :to="{ name: 'lange' }">Solomon Lange</router-link></li>
											<li><router-link :to="{ name: 'japhy' }">Japhy Davies </router-link></li>
											<li><router-link :to="{ name: 'opera' }">Opera Davies</router-link></li>
											<li><router-link :to="{ name: 'joey' }">Joey</router-link></li>
											<li><router-link :to="{ name: 'pv' }">PV</router-link></li>
                                            <li><router-link :to="{ name: 'steve' }">Steve Willies</router-link></li>
                                            <li><router-link :to="{ name: 'emmy' }">Emmy Abraham</router-link></li>
											</ul>
										</li>

									</ul>
								</li>
								<li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                                <li><router-link :to="{ name: 'donate' }"><span class="donate">Donate</span></router-link></li>
							</ul>
						</nav>
					</div>
				</div>
				<!-- End Mobile Menu -->
	            <div class="mobile-menu d-block d-lg-none">
	            </div>
	            <!-- Mobile Menu -->
			</div>
		</header>
		<!-- //Header -->
		<!-- Start Search Popup -->
		<div class="brown--color box-search-content search_active block-bg close__top">
			<form id="search_mini_form" class="minisearch" action="#">
				<div class="field__search">
					<input type="text" placeholder="Search entire store here...">
					<div class="action">
						<a href="#"><i class="zmdi zmdi-search"></i></a>
					</div>
				</div>
			</form>
			<div class="close__wrap">
				<span>close</span>
			</div>
		</div>
		<!-- End Search Popup -->


           <!-- Register Modal -->
            <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="registerModalLabel">Register</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                <div class="modal-body">
                     <div class="form-group">
                        <input v-model="name" type="text" name="name"
                            placeholder="Name"
                            class="form-control">

                    </div>

                     <div class="form-group">
                        <input v-model="email" type="email" name="email"
                            placeholder="Email Address"
                            class="form-control">

                    </div>

                    <div class="form-group">
                        <input v-model="password" type="password" name="password" placeholder="Password" id="password"
                        class="form-control">

                    </div>

                      <div class="form-group">
                        <input v-model="password_confirmation" type="password" name="password-confirm" placeholder="Confirm Password" id="password-confirm"
                        class="form-control">

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" @click="register">Create</button>
                </div>

                </form>

                </div>
            </div>
        </div>

        <!-- Login Modal -->
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                <div class="modal-body">

                     <div class="form-group">
                        <input v-model="login_email" type="email" name="email"
                            placeholder="Email Address"
                            class="form-control">

                    </div>

                    <div class="form-group">
                        <input v-model="login_password" type="password" name="password" placeholder="Password" id="password"
                        class="form-control">

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" @click="login">Login</button>
                </div>

                </form>

                </div>
            </div>
        </div>

	</div>
	<!-- //Main wrapper -->

</template>

<script>
    export default {
         data() {
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",

                login_email : "",
                login_password : "",

            // login_name: null,
            user_type: 0,
            isLoggedIn: localStorage.getItem('jwt') != null
            }
        },
        methods: {


            registerModal(){
                // this.form.reset();
                $('#registerModal').modal('show');
            },
            loginModal(){
                // this.form.reset();
                $('#loginModal').modal('show');
            },

            register(e){

                e.preventDefault()

                if (this.password === this.password_confirmation)
                {
                    axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        c_password : this.password_confirmation
                      })
                      .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)
                        console.log(JSON.stringify(response.data.user))

                        // if (localStorage.getItem('jwt') != null){
                        //     this.$emit('loggedIn')
                        //     if(this.$route.params.nextUrl != null){
                        //         this.$router.push(this.$route.params.nextUrl)
                        //     }
                        //     else{
                        //         this.$router.push('/')
                        //     }
                        // }
                      })
                      .catch(error => {
                        console.error(error);
                      });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert('Passwords do not match')
                }
            },

            login(e){
                e.preventDefault()
                // this.$Progress.start();

                    axios.post('api/login', {
                        email: this.login_email,
                        password: this.login_password
                      })
                      .then(response => {
                        FireEvent.$emit('AfterLogin');
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                         $('#loginModal').modal('hide')


                        if (localStorage.getItem('jwt') != null){
                          // this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                    toast.fire({
                                        icon: 'success',
                                        title: 'Welcome to the Admin Dashboard'
                                    })
                                }
                                else {
                                    this.$router.push('dashboard')
                                    toast.fire({
                                        icon: 'success',
                                        title: 'Login successfully! Happy Shopping'
                                    })

                                }
                            }

                        }

                      })
                      .catch(function (error) {
                        console.log(error)
                        toast.fire({
                            icon: 'error',
                            title: 'Unable to sign in User. An Error Occured!'
                        })
                      });
            },
            setDefaults(){
                if(this.isLoggedIn){
                    let user = JSON.parse(localStorage.getItem('user'))
                    this.name = user.name
                    this.user_type = user.is_admin
                    console.log(name)
                    console.log(user_type)
                }
                },
            change(){
                    this.isLoggedIn = localStorage.getItem('jwt') != null
                    this.setDefaults()
                },

            logout(){

                localStorage.removeItem('jwt')
                localStorage.removeItem('user')
                if (localStorage.getItem('jwt') == null){
                    console.log('User logged out')
                }
               this.change()
                this.$router.push('/')
            },
        mounted() {

        },

        created() {
           this.setDefaults()
           FireEvent.$on('AfterLogin',() => {
               this.setDefaults()
           });

        }

    }
    }
</script>
