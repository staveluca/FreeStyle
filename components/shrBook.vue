<template>
    <a href="tel:+393392414870">
        <button id="container" class="bg-custom-black text-custom-pink rounded-full py-18 px-68 text-2xl hover:text-custom-purple hover:cursor-pointer hover:ring-2 hover: ring-inset hover:ring-custom-purple hover:drop-shadow-custom-shadow">
            <p id="border-pink">{{content}}</p>
        </button>
    </a>
</template>

<style>
#border-pink{
    text-shadow: -0.5px 0 #FAE0E4, 0 0.5px #FAE0E4, 0.5px 0 #FAE0E4, 0 -0.5px #FAE0E4;
}

#container:hover #border-pink{
    text-shadow: -0.5px 0 #A391E1, 0 0.5px #A391E1, 0.5px 0 #A391E1, 0 -0.5px #A391E1;
}
</style>

<script>
export default {
  props: {
    content: {
            type: String,
            default: "default"
        }
    }
}
</script>
