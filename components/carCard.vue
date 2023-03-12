<template>
    <div @click="navigate()" class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                        <div class="relative">
                            <img src="../assets/images/nft/items/1.jpg" alt="">
                            <div class="absolute ltr:right-0 rtl:left-0 top-0 mt-6 ltr:mr-6 rtl:ml-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <a href="#!" class="btn btn-icon text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></a>
                            </div>

                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                <a class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</a>
                            </div>

                            <div class="absolute bottom-0 ltr:left-0 rtl:right-0 ltr:ml-6 rtl:mr-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3">
                                <i class="uil uil-clock align-middle"></i> <small id="auction-item-1" class="font-semibold">00 : 00 : 00 : 00</small>
                            </div>
                        </div>

                        <div class="p-6 relative">
                            <a  class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">Deep Sea Phantasy</a>

                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center">
                                    <i class="mdi mdi-ethereum text-xl leading-none text-indigo-600 ltr:mr-1 rtl:ml-1"></i>
                                    <span class="block font-semibold text-indigo-600">20.5 ETH</span>
                                </div>

                                <div>
                                    <i class="mdi mdi-heart text-red-600"></i> <span class="text-slate-400">22</span>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script setup>
    const router = useRouter();
    const navigate = () => {
        router.push('/car/id')
    }
</script>