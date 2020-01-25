<template>
    <div>

        <section class="my_account_area pt--80 pb--55 bg--white">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-12">
						<div class="my__account__wrapper">
							<h3 class="account__title">Login</h3>
							<form action="#">
								<div class="account__form">
									<div class="input__box">
										<label>Email address <span>*</span></label>
										<input id="email" type="email" class="form-control" v-model="email" required autofocus>
									</div>
									<div class="input__box">
										<label>Password<span>*</span></label>
										<input id="password" type="password" class="form-control" v-model="password" required>
									</div>
									<div class="form__btn">
									<button type="submit" class="btn btn-primary" @click="login">
                                        Login
                                    </button>
										<!-- <label class="label-for-checkbox">
											<input id="rememberme" class="input-checkbox" name="rememberme" value="forever" type="checkbox">
											<span>Remember me</span>
										</label> -->
									</div>
									<!-- <a class="forget_pass" href="#">Lost your password?</a> -->
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                email : "",
                password : "",
            }
        },
        methods: {

            login(e){
                e.preventDefault()
                     axios.post('api/login', {
                        email: this.email,
                        password: this.password
                      })
                      .then(response => {
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin!= 1){
                                this.$router.push('dashboard')
                                    toast.fire({
                                        icon: 'success',
                                        title: 'Login successful! Happy Shopping'
                                    })
                                }else{
                                    this.$router.push('admin')
                                    // toast.fire({
                                    //     icon: 'error',
                                    //     title: 'Unsuccessful! We do not seem to have your details!'
                                    // })
                                }
                            }
                        }

                      })
                      .catch(function (error) {
                        toast.fire({
                            icon: 'error',
                            title: 'Unable to sign in User. An Error Occured!'
                        })
                      });
            },
        mounted() {

        },
    }
    }
</script>
