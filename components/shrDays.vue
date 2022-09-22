<template>
    <div>
        <div class="ring-2 ring-custom-purple px-27 sm:px-33 py-11c relative left-1 top-1 bg-custom-pink">
            <p id="border-purple" class="text-custom-purple text-2xl">{{day}}</p>
        </div>
        <div class="ring-2 ring-custom-purple px-27 sm:px-33 py-11c bg-custom-pink z-10 relative -top-54">
            <p id="border-purple" class="text-custom-purple text-2xl">{{day}}</p>
        </div>
        <div class="flex flex-col justify-center items-center relative -top-48">
            <div v-if="open!==''" class="border-l-custom border-custom-black h-50 sm:h-75"></div>
            <p id="border-hours" class="text-2xl">{{open}}</p>
            <div v-if="close!==''" class="border-l-custom border-custom-black h-15"></div>
            <p id="border-hours" class="text-2xl">{{close}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        day: {
            type: String,
            default: "default"
        },

        open: {
            type: String,
            default: ""
        },

        close: {
            type: String,
            default: ""
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