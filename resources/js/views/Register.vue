<template>
    <div>

<section class="my_account_area pt--80 pb--55 bg--white">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-12">
						<div class="my__account__wrapper">
							<h3 class="account__title">Register</h3>
							<form action="#">
								<div class="account__form">
                                    <div class="input__box">
										<label>Name <span>*</span></label>
										<input id="name" type="text" class="form-control" v-model="name" required autofocus>
									</div>
									<div class="input__box">
										<label>Email address <span>*</span></label>
										<input id="email" type="email" class="form-control" v-model="email" required>
									</div>
									<div class="input__box">
										<label>Password<span>*</span></label>
										<input id="password" type="password" class="form-control" v-model="password" required>
									</div>
                                    <div class="input__box">
										<label>Confirm Password<span>*</span></label>
										<input id="password-confirm" type="password" class="form-control" v-model="password_confirmation" required>
									</div>
									<div class="form__btn">
										<button type="submit" class="btn btn-primary" @click="register">
                                        Register
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
        props : ['nextUrl'],
         data() {
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
            }
        },
        methods: {

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

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                      })
                      .catch(error => {
                        toast.fire({
                            icon: 'error',
                            title: 'Unable to register User. Try again!'
                        })
                      });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    toast.fire({
                            icon: 'error',
                            title: 'Passwords do not match. Try again!'
                        })
                }
            },

        mounted() {

        },
    }
    }
</script>
