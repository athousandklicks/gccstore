<template>
    <div>
    <vue-progress-bar></vue-progress-bar>
        <Banner></Banner>
        <Feature></Feature>
        <PopularProducts></PopularProducts>
        <Footer></Footer>

    </div>
</template>

<script>
//  import('../../../public/js/plugins.js');
// import('../../../public/js/active.js');
    export default {

        data() {
            return {
                editmode: false,
                users : {},

            }
        },
        methods: {


                newModal(){
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },

            register(){

                $('#addNew').modal('hide')


                // this.$Progress.start();

                // this.form.post('api/user')
                // .then(()=>{
                //     Fire.$emit('AfterCreate');
                //     $('#addNew').modal('hide')

                //     toast({
                //         type: 'success',
                //         title: 'User Created in successfully'
                //         })
                //     this.$Progress.finish();

                // })
                // .catch(()=>{

                // })
            },


        },


        mounted() {

        },

    }
</script>
