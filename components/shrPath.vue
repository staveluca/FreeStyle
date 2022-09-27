<template>
    <div class="text-center">
        <router-link :to="path">
            <p class="text-3xl lg:text-4xl">{{content}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
      props: {
        content: {
                type: String,
                default: "default"
            },
        path: {
                type: String,
                default: ""
            }
        }
    }
</script>