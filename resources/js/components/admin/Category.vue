<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Product Categories</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#categoryModal">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr >
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="category in categories.data" :key="category.id">
                        <td>{{category.name | upText}}</td>
                        <td>{{category.created_at | myDate}}</td>

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
            <div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="categoryModalLabel">Category Actions</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form @submit.prevent="createCategory()">
                <div class="modal-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-model="form.name" type="text" name="name"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Create</button>
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
              categories : {},
              form: new Form({
                    id:'',
                    name : '',
                })

            }
        },

        methods: {

            createCategory(){
                this.$Progress.start();
                this.form.post('api/category')
                .then(()=>{
                    FireEvent.$emit('AfterCreate');
                 $('#categoryModal').modal('hide')

                        toast.fire({
                        icon: 'success',
                        title: 'Category Created Successfully'
                        })
                     this.$Progress.finish();

                })
                .catch(()=>{
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Unable to Create Category. An Error Occured!'
                        })
                })
            },

            loadCategories(){

                    axios.get("api/category").then(({ data }) => (this.categories = data));

            },
        },

           created() {

           this.loadCategories();
           FireEvent.$on('AfterCreate',() => {
               this.loadCategories();
           });
        //    setInterval(() => this.loadUsers(), 3000);
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
