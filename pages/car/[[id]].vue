<template>


        <!-- Start Hero -->
        <section  class="relative table w-full md:pb-24 pb-16 mt-28">
            <div v-if="theCar[0]" class="container">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-6 md:col-span-5">
                        <div class="sticky top-20">
                            <img src="../../assets/images/nft/items/item-detail-1.jpg" class="rounded-md shadow-md dark:shadow-gray-800" alt="">
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-6 md:col-span-7">
                        <div class="">
                            <h5 class="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">{{theCar[0].name}} <!--span class="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br> Illustration</span--></h5>

                            <div class="grid md:grid-cols-2 grid-cols-1 mt-6">
                                <div>
                                    <h6 class="text-lg font-semibold">Price</h6>
                                    
                                    <h6 class="text-2xl font-semibold  text-slate-400 mt-2">$450.48USD</h6>
                                </div>

                                <div>
                                    <h6 class="text-lg font-semibold">Car type:</h6>
                                    <span id="auction-item-1" class="text-2xl font-semibold mt-2">{{theCar[0].name}}</span>
                                </div>
                            </div>

                            <div class="mt-6">
                                <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md ltr:mr-2 rtl:ml-2"><i class="mdi mdi-gavel fs-5 ltr:mr-2 rtl:ml-2"></i> Order now</a>
                                <!--a href="#" class="ml-8 pl-8 btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i class="mdi mdi-cart fs-5 ltr:mr-2 rtl:ml-2"></i> Buy Now</a-->
                            </div>

                            <div class="grid grid-cols-1 mt-8">
                                <ul class="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                    <li role="presentation" class="md:inline-block block md:w-fit w-full">
                                        <button class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out text-white bg-indigo-600" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">Details</button>
                                    </li>
                                    <li role="presentation" class="md:inline-block block md:w-fit w-full">
                                        <button class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="false">Bids</button>
                                    </li>
                                    <li role="presentation" class="md:inline-block block md:w-fit w-full">
                                        <button class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
                                    </li>
                                </ul>

                                <div id="StarterContent" class="mt-6">
                                    <div class="" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                                        <div class="grid grid-cols-1">
                                            <p class="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                                            <p class="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                                            <h6 class="text-xl font-semibold">Owner</h6>
            
                                            <div class="flex items-center mt-3">
                                                <img src="../../assets/images/client/08.jpg" class="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                
                                                <div class="ltr:ml-3 rtl:mr-3">
                                                    <h6 class="text-lg font-semibold"><a href="#" class="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="hidden" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                                        <div class="grid grid-cols-1">
                                            <div class="flex items-center">
                                                <div class="relative">
                                                    <img src="../../assets/images/client/01.jpg" class="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                                </div>
                
                                                <div class="ltr:ml-3 rtl:mr-3">
                                                    <h6 class="text-lg font-semibold">2 WETH <span class="text-slate-400">by</span> <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
                                                    <span class="text-slate-400">6 hours ago</span>
                                                </div>
                                            </div>
            
                                            <div class="flex items-center mt-4">
                                                <div class="relative">
                                                    <img src="../../assets/images/client/02.jpg" class="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                                </div>
                
                                                <div class="ltr:ml-3 rtl:mr-3">
                                                    <h6 class="text-lg font-semibold">0.001 WETH <span class="text-slate-400">by</span> <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</a></h6>
                                                    <span class="text-slate-400">6 hours ago</span>
                                                </div>
                                            </div>
            
                                            <div class="flex items-center mt-4">
                                                <div class="relative">
                                                    <img src="../../assets/images/client/03.jpg" class="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                                </div>
                
                                                <div class="ltr:ml-3 rtl:mr-3">
                                                    <h6 class="text-lg font-semibold">1.225 WETH <span class="text-slate-400">by</span> <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                                                    <span class="text-slate-400">6 hours ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                                        <div class="grid grid-cols-1">
                                            <div class="rounded-md shadow dark:shadow-gray-800 p-6">
                                                <div class="flex items-center">
                                                    <div class="relative">
                                                        <img src="../../assets/images/nft/items/1.jpg" class="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="">
        
                                                        <div class="absolute top-0 left-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                                            <i class="mdi mdi-account-check mdi-18px text-green-600"></i>
                                                        </div>
                                                    </div>
                                                        
                                                    <span class="content ltr:ml-3 rtl:mr-3">
                                                        <a href="#" class="hover:text-indigo-600 text-lg block">Digital Art Collection</a>
                                                        <span class="text-slate-400 block mt-1">Started Following <a href="#" class="link font-semibold">@Panda</a></span>
                                                        
                                                        <span class="text-slate-400 block mt-1">1 hours ago</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end grid-->
            </div><!--end container-->
            <Error v-else/>
            <div class="container md:mt-8 mt-8">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Cars</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great Cars of all Bahirdar with their seekers!</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <!-- Start Bid -->
                    <CarCard v-for="i in 4" :key="i"/>
                    <!-- End Bid -->
                    
                    
                </div>
            </div>
        </section><!--end end section-->
        <!-- End -->

     


       




</template>

<script setup>

    const cars = useCars();

    const route = useRoute();

    const theCar = cars.value.cars.filter(car => {
        console.log(car.id);
        return car.id == route.params.id;
    })
    //console.log("single", theProduct[0].id)


</script>