<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Users</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#userModal">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Registered At</th>
                        <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users.data" :key="user.id">

                        <td>{{user.name | upText}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.type | upText}}</td>
                        <td>{{user.created_at | myDate}}</td>
                      <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        |
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- Modal -->
            <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="userModalLabel">User Action</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form @submit.prevent="createUser()">
                <div class="modal-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-model="form.name" type="text" name="name"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div>
                    <div class="form-group">
                        <input v-model="form.email" type="email" name="email"
                            placeholder="Email Address"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"></has-error>
                    </div>
                    <div class="form-group">
                        <input v-model="form.password" type="password" name="password" id="password" placeholder="Password"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                    </div>


                    <div class="form-group">
                        <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                            <option v-for="type in types.data" :key="type.id">{{type.name}}</option>
                            <!-- <option value="">Select User Role</option> -->
                            <!-- <option value="admin">Admin</option>
                            <option value="user">Standard User</option>
                            <option value="author">Author</option> -->
                        </select>
                        <has-error :form="form" field="type"></has-error>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
                </form>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
    export default {

        data() {
          return {
              users : {},
              form: new Form({
                    id:'',
                    name : '',
                    email: '',
                    password: '',
                    type: {},
                    photo: ''
                }),
                types: {},
            }
        },

        methods: {

            loadCategories(){
                    axios.get("api/category").then(({ data }) => (this.types = data));
            },

            createUser(){
                this.$Progress.start();

                this.form.post('api/user')
                .then(()=>{
                    FireEvent.$emit('AfterCreate');
                   $('#userModal').modal('hide')

                    toast.fire({
                        icon: 'success',
                        title: 'User Created Successfully'
                        })
                     this.$Progress.finish();

                })
                .catch(()=>{
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Unable to Create User. An Error Occured!'
                        })
                })
            },

            loadUsers(){

                    axios.get("api/user").then(({ data }) => (this.users = data));

            },
        },

        created() {
            this.loadCategories();
           this.loadUsers();
           FireEvent.$on('AfterCreate',() => {
               this.loadUsers();
           });
        //    setInterval(() => this.loadUsers(), 3000);
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
