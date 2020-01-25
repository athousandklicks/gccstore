<template>
<div class="wrapper">
      <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>


  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="/img/logo.png" alt="Graceville Store" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Graceville Store</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/img/profile.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">
            <!-- {{Auth::user()->name}}
            <p>{{Auth::user()->type}}</p> -->
        </a>
        </div>
      </div>

      <!-- Sidebar Menu -->

      <nav class="mt-2">

        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt blue"></i>
                    <p>
                    Dashboard

                    </p>
                </router-link>
                </li>


               <li class="nav-item has-treeview">
                 <a href="#" class="nav-link">
                   <i class="nav-icon fab fa-product-hunt yellow"></i>
                   <p>
                     Products
                     <i class="right fa fa-angle-left"></i>
                   </p>
                 </a>
                 <ul class="nav nav-treeview">

                   <li class="nav-item has-treeview">
                     <a href="#" class="nav-link">
                       <i class="fa fa-circle nav-icon"></i>
                       <p>
                         Messages
                         <i class="right fa fa-angle-left"></i>
                       </p>
                     </a>
                     <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/all-messages" class="nav-link">
                              <i class="fa fa-dot-circle nav-icon"></i>
                              <p>All Messages</p>
                            </router-link>
                          </li>
                       <li class="nav-item">
                         <a href="#" class="nav-link">
                           <i class="fa fa-dot-circle nav-icon"></i>
                           <p>CDs</p>
                         </a>
                       </li>
                       <li class="nav-item">
                         <a href="#" class="nav-link">
                           <i class="fa fa-dot-circle nav-icon"></i>
                           <p>DVDs</p>
                         </a>
                       </li>
                       <li class="nav-item">
                         <a href="#" class="nav-link">
                           <i class="far fa-dot-circle nav-icon"></i>
                           <p>Digital</p>
                         </a>
                       </li>
                       <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-circle nav-icon"></i>
                          <p>Bundles</p>
                        </a>
                      </li>
                     </ul>
                   </li>
                   <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle nav-icon"></i>
                      <p>
                        Books
                        <i class="right fa fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                              <i class="fa fa-dot-circle nav-icon"></i>
                              <p>All Books</p>
                            </a>
                          </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-dot-circle nav-icon"></i>
                          <p>Hard Copy</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-dot-circle nav-icon"></i>
                          <p>Soft Copy</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle nav-icon"></i>
                      <p>
                        Music
                        <i class="right fa fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                              <i class="fa fa-dot-circle nav-icon"></i>
                              <p>All Music</p>
                            </a>
                          </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-dot-circle nav-icon"></i>
                          <p>Hard Copy</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-dot-circle nav-icon"></i>
                          <p>Soft Copy</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                 </ul>
               </li>

          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-cog green"></i>
              <p>
                Management
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/users" class="nav-link">
                    <i class="fas fa-users nav-icon purple"></i>
                    <p>Users</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/categories" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Category</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/tags" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Tags</p>
                </router-link>
              </li>
            </ul>
          </li>


          <!-- <li class="nav-item">
            <a class="nav-link" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                <i class="nav-icon fa fa-power-off red"></i>
                <p>
                    {{ __('Logout') }}
                </p>
             </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </li> -->

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
         <component :is="activeComponent"></component>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2019 <a href="http://gracestore.com">GCC Stores</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Shop</b>
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</template>

<script>

    import Dashboard from '../components/admin/Dashboard'
    import Users from '../components/admin/Users'
    import Products from '../components/admin/Products'
    import Orders from '../components/admin/Orders'
    import Category from '../components/admin/Category'
    import Tag from '../components/admin/Tag'
    import AllMessages from '../components/admin/AllMessages'

    export default {

        data(){
            return {
                user : null,
                activeComponent : null
            }
        },
        components : {
            Dashboard, Users, Products, Orders, Category, Tag, AllMessages
        },

        beforeMount(){
            this.setComponent(this.$route.params.page)
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
        },

        methods : {
            setComponent(value){
                switch(value) {
                    case "users":
                        this.activeComponent = Users
                        this.$router.push({name : 'admin-pages', params : {page: 'users'}})
                        break;
                    case "orders":
                        this.activeComponent = Orders
                        this.$router.push({name : 'admin-pages', params : {page: 'orders'}})
                        break;
                    case "products":
                        this.activeComponent = Products
                        this.$router.push({name : 'admin-pages', params : {page: 'products'}})
                        break;
                        case "category":
                        this.activeComponent = Category
                        this.$router.push({name : 'admin-pages', params : {page: 'category'}})
                        break;
                        case "tag":
                        this.activeComponent = Tag
                        this.$router.push({name : 'admin-pages', params : {page: 'tag'}})
                        break;
                        case "allMessages":
                        this.activeComponent = AllMessages
                        this.$router.push({name : 'admin-pages', params : {page: 'allMessages'}})
                        break;
                    default:
                        this.activeComponent = Dashboard
                        this.$router.push({name : 'admin'})
                        break;
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
