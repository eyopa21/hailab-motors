<template>
       <!-- Start Navbar -->
        <nav id="topnav" class="defaultscroll is-sticky">
            <div class="container flex justify-between md:justify-around">
                <!-- Logo container-->
                <a class="logo bg-red-500">
                    <!--img src="../assets/images/logo-dark.png" class="inline-block dark:hidden" alt=""-->
                    <h1 style="color: blue;" class="inline-block text-blue-600 text-3xl">Hailab Motors</h1>
                  
                </a>

                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

             
                <!--Login button End-->

                <div id="navigation">
                    <!-- Navigation Menu-->   
                    <ul class="navigation-menu">
                        <li><NuxtLink to="/" class="sub-menu-item">Home</NuxtLink></li>
                        <li><NuxtLink to="/cars" class="sub-menu-item">Cars</NuxtLink></li>
                        <li><NuxtLink to="/about" class="sub-menu-item">About</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="sub-menu-item">Contact</NuxtLink></li>
                        

                
                    </ul><!--end navigation menu-->
                </div><!--end navigation-->
            </div><!--end container-->
        </nav><!--end header-->
        <!-- End Navbar -->
</template>