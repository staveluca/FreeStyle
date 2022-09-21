<template>
    <div>
        <div class="ring-2 ring-custom-purple px-33 py-11c relative left-1 top-1 bg-custom-pink">
            <p id="border-purple" class="text-custom-purple text-2xl">{{day}}</p>
        </div>
        <div class="ring-2 ring-custom-purple px-33 py-11c bg-custom-pink z-10 relative -top-54">
            <p id="border-purple" class="text-custom-purple text-2xl">{{day}}</p>
        </div>
        <div>
            <div v-if="day!=='LUN' && day!=='DOM'" class="border-l-custom border-custom-black h-75 relative left-56 -top-48"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        day: {
            type: String,
            default: "default"
        }
    }
}
</script>

<style>
    #border-purple{
        text-shadow: -0.5px 0 #A391E1, 0 0.5px #A391E1, 0.5px 0 #A391E1, 0 -0.5px #A391E1;
    }

    #border-hours{
        text-shadow: -0.5px 0 #202020, 0 0.5px #202020, 0.5px 0 #202020, 0 -0.5px #202020;
    }
</style>