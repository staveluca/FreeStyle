<template>
<div>
  <!-- menu overlay -->
  <div v-if="isActive" class="h-full w-full fixed top-0 left-0 bg-custom-pink z-20 px-20 py-40 flex flex-col items-center">
    <button @click="isActive = !isActive" class="lg:hidden self-end">
      <img src="../../Material/close.png" alt="close icon" />
    </button>
    <div class="flex flex-col mt-85 gap-40 mb-150">
      <shrPath content="HOME" id="border-purple" class="text-custom-purple border-b-2 border-custom-purple w-auto" />
      <shrPath content="SERVIZI" class="border-y-custom border-custom-black" />
      <shrPath content="CHI SIAMO" class="border-y-custom border-custom-black" />
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
    <shrPath content="HOME" id="border-purple" class="w-1/3 text-custom-purple border-b-2 border-custom-purple" />
    <shrPath content="SERVIZI" class="w-1/3 hover:cursor-pointer" />
    <shrPath content="CHI SIAMO" class="w-1/3 hover:cursor-pointer" />
  </div>

  <!-- opening hours -->
  <div class="lg:px-20 mt-50 sm:mt-100 block overflow-x-auto overflow-y-hidden">
    <div class="border-t-custom border-custom-black relative top-27"></div>
    <div class="flex justify-between gap-x-5">
      <ShrDays day="LUN" />
      <ShrDays day="MAR" open="09.00" close="17.00" />
      <ShrDays day="MER" open="09.00" close="17.00" />
      <ShrDays day="GIO" open="10.00" close="19.30" />
      <ShrDays day="VEN" open="09.00" close="19.00" />
      <ShrDays day="SAB" open="09.00" close="17.00" />
      <ShrDays day="DOM" />
    </div>
  </div>

  <div class="flex flex-col lg:flex-row justify-between mt-75 sm:mt-50 items-center lg:items-end">
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
    <!-- position -->
    <div class="flex flex-col lg:flex-row lg:items-center order-1 lg:order-2">
      <div class="flex flex-col">
        <div class="flex items-center mb-25 lg:mb-0 lg:mr-50">
          <div class="w-20 lg:w-50 border-t-2 border-custom-purple"></div>
          <h1 id="border1-purple" class="text-4xl lg:text-5xl text-custom-purple ml-1 lg:ml-25">RAGGIUNGICI</h1>
        </div>
        <ShrPosition class="relative left-20 lg:block lg:left-0 mr-48 z-10"/>
      </div>
      <shrMap class="relative -top-200 lg:block lg:top-0 z-0" />
    </div>
  </div>
</div>
</template>

<script>
import ShrBook from '../components/shrBook.vue';
import ShrDays from '../components/shrDays.vue';
import ShrPosition from '../components/shrPosition.vue';
export default {
  name: "IndexPage",
  components: { ShrBook, ShrDays, ShrPosition },

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