<template>
    <div>
        <!-- menu overlay -->
        <div v-if="isActive" class="h-full w-full fixed top-0 left-0 bg-custom-pink z-20 px-20 py-40 flex flex-col items-center">
            <button @click="isActive = !isActive" class="lg:hidden self-end">
                <img src="../../Material/close.png" alt="close icon" />
            </button>
            <div class="flex flex-col mt-85 gap-40 mb-150">
                <shrPath path="/" content="HOME" class="border-y-custom border-custom-black" />
                <shrPath path="/services" content="SERVIZI" class="border-y-custom border-custom-black" />
                <shrPath path="/about" content="CHI SIAMO" id="border-purple" class="text-custom-purple border-b-2 border-custom-purple w-auto" />
            </div>
            <ShrBook content="PRENOTA" class="mb-25" />
            <!-- socials -->
            <div class="flex items-center mb-100">
                <a href="https://wa.me/3392414870?text=Buongiorno,%20la%20contatto%20perché%20sarei%20interessato/a%20a%20prenotare%20un%20appuntamento.%20Sarei%20disponibile%20per%20le%20seguenti%20date:">
                    <img src="../../Material/Whatsapp.png" alt="whatsapp logo" class="h-25" />
                </a>
                <a href="https://www.instagram.com/freestyleparrucchieraunisex/">
                    <img src="../../Material/Facebook.png" alt="whatsapp logo" class="h-25 w-15 mx-20" />
                </a>
                <a href="https://www.instagram.com/freestyleparrucchieraunisex/">
                    <img src="../../Material/Insta.png" alt="whatsapp logo" class="h-25" />
                </a>
            </div>
            <img src="../../Material/LogoMobile.png" alt="free style logo" class="h-56" />
        </div>

        <div class="flex justify-between border-b-custom border-custom-black pb-20 lg:pb-0 lg:border-0">
            <!-- logo & menu btn mobile -->
            <img src="../../Material/LogoMobile.png" alt="free style logo" class="lg:hidden h-56" />
            <button @click="isActive = !isActive" class="lg:hidden">
                <img src="../../Material/Menu.png" alt="menu icon" class="h-40" />
            </button>
            <!-- logo & book btn desktop -->
            <img src="../../Material/LogoDesktop.png" alt="free style logo" class="h-11 hidden lg:block" />
            <ShrBook content="PRENOTA" class="hidden lg:block"/>
        </div>

        <!-- navigation menu (highlighted route) desktop -->
        <div class="border-y-custom border-custom-black mt-30 lg:flex justify-center px-229 hidden">
            <shrPath path="/" content="HOME" class="w-1/3 hover:cursor-pointer" />
            <shrPath path="/services" content="SERVIZI" class="w-1/3 hover:cursor-pointer" />
            <shrPath path="/about" content="CHI SIAMO" id="border-purple" class="w-1/3 text-custom-purple border-b-2 border-custom-purple" />
        </div>

        <!-- socials -->
        <div class="flex lg:flex-col items-center order-2 lg:order-1 self-end relative -top-100 lg:flex lg:top-0">
            <div class="rounded border-b-2 lg:border-b-0 lg:border-l-2 border-custom-black w-40 lg:w-0 lg:h-100 mr-25 lg:mr-0 lg:mb-20"></div>
            <a href="https://wa.me/3392414870?text=Buongiorno,%20la%20contatto%20perché%20sarei%20interessato/a%20a%20prenotare%20un%20appuntamento.%20Sarei%20disponibile%20per%20le%20seguenti%20date:">
                <img src="../../Material/Whatsapp.png" alt="whatsapp logo" class="h-25 lg:h-30" />
            </a>
            <a href="https://www.instagram.com/freestyleparrucchieraunisex/">
                <img src="../../Material/Facebook.png" alt="whatsapp logo" class="h-25 lg:h-30 w-15 mx-20 lg:my-20 lg:mx-0" />
            </a>
            <a href="https://www.instagram.com/freestyleparrucchieraunisex/">
                <img src="../../Material/Insta.png" alt="whatsapp logo" class="h-25 lg:h-30" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          isActive: false
        }
      }
    }
</script>
    
<style>
#border-purple{
    text-shadow: -0.5px 0 #A391E1, 0 0.5px #A391E1, 0.5px 0 #A391E1, 0 -0.5px #A391E1;
}
    
#border1-purple{
    text-shadow: -1px 0 #A391E1, 0 1px #A391E1, 1px 0 #A391E1, 0 -1px #A391E1;
}
</style>