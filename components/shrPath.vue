<template>
    <div class="text-center">
        <p class="text-4xl">{{content}}</p>
    </div>
</template>

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