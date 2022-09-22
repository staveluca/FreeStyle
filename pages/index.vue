<template>
<div>
  <div class="flex justify-between border-b-custom border-custom-black pb-20 sm:pb-0 sm:border-0">
    <!-- logo & book btn mobile -->
    <img src="../../Material/LogoMobile.png" alt="free style logo" class="sm:hidden h-56" />
    <img src="../../Material/Menu.png" alt="menu icon" class="sm:hidden h-40" />
    <!-- logo & book btn desktop -->
    <img src="../../Material/LogoDesktop.png" alt="free style logo" class="h-11 hidden sm:block" />
    <ShrBook content="PRENOTA" class="hidden sm:block"/>
  </div>

  <!-- navigation menu (highlighted route) desktop -->
  <div class="border-y-custom border-custom-black mt-30 sm:flex justify-center px-229 hidden">
    <shrPath content="HOME" id="border-purple" class="w-1/3 text-custom-purple border-b-2 border-custom-purple" />
    <shrPath content="SERVIZI" class="w-1/3 hover:cursor-pointer" />
    <shrPath content="CHI SIAMO" class="w-1/3 hover:cursor-pointer" />
  </div>

  <!-- opening hours -->
  <div class="sm:px-114 mt-50 sm:mt-100 block overflow-x-auto overflow-y-hidden">
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

  <div class="hidden sm:flex justify-between mt-50 items-end">
    <!-- socials -->
    <div class="flex flex-col items-center">
      <div class="border-l-2 border-custom-black h-100 mb-20"></div>
      <img src="../../Material/WhatsappDesktop.png" alt="whatsapp logo" class="h-30" />
      <img src="../../Material/FacebookDesktop.png" alt="whatsapp logo" class="h-30 w-15 my-20" />
      <img src="../../Material/InstaDesktop.png" alt="whatsapp logo" class="h-30" />
    </div>
    <!-- position -->
    <div class="flex items-center">
      <ShrPosition class="mr-48"/>
      <shrMap />
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
    components: { ShrBook, ShrDays, ShrPosition }
}
</script>

<style>
#border-purple{
    text-shadow: -0.5px 0 #A391E1, 0 0.5px #A391E1, 0.5px 0 #A391E1, 0 -0.5px #A391E1;
}
</style>