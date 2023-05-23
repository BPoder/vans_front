<template>
    <div v-if="message !== ''" class="row justify-content-center">
        <div class="col col-6">
            <div class="alert alert-warning" role="alert">
                {{ message }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertMessage',
    props: {
        message: {}
    }
}
</script>