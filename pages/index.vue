<template>
<div>
  <!-- logo & book btn -->
  <div class="flex justify-between">
    <img src="../../Material/LogoDesktop.png" alt="free style logo" class="h-11" />
    <ShrBook content="PRENOTA"/>
  </div>

  <!-- navigation menu -->
  <div class="border-y-custom border-custom-black mt-30 flex justify-center px-229">
    <!-- highlighted path -->
    <shrPath content="HOME" id="border-purple" class="w-1/3 text-custom-purple border-b-2 border-custom-purple" />
    <shrPath content="SERVIZI" class="w-1/3 hover:cursor-pointer" />
    <shrPath content="CHI SIAMO" class="w-1/3 hover:cursor-pointer" />
  </div>

  <!-- opening hours -->
  <div class="px-114 mt-100">
    <div class="border-t-custom border-custom-black relative top-27"></div>
    <div class="flex justify-between">
      <ShrDays day="LUN" />
      <ShrDays day="MAR" open="09.00" close="17.00" />
      <ShrDays day="MER" open="09.00" close="17.00" />
      <ShrDays day="GIO" open="10.00" close="19.30" />
      <ShrDays day="VEN" open="09.00" close="19.00" />
      <ShrDays day="SAB" open="09.00" close="17.00" />
      <ShrDays day="DOM" />
    </div>
  </div>
</div>
</template>

<script>
import ShrBook from '../components/shrBook.vue';
import ShrDays from '../components/shrDays.vue';
export default {
    name: "IndexPage",
    components: { ShrBook, ShrDays }
}
</script>

<style>
#border-purple{
    text-shadow: -0.5px 0 #A391E1, 0 0.5px #A391E1, 0.5px 0 #A391E1, 0 -0.5px #A391E1;
}
</style>