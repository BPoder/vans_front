<template>
    <nav>
        <router-link to="/">Kodu</router-link> |
        <router-link to="/">Teated</router-link> |
        <router-link to="/login">Logi välja</router-link>
    </nav>
    <div class="justify-content-center">
    <div class="col col-6">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
export default {
    name: 'UserHomeView',
    data: function() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleId: sessionStorage.getItem('roleName'),
            driverId: sessionStorage.getItem('driverId')
        }
    },
    methods: {
        loginAlert: function() {
            alert('userId' + this.userId + 'roleName' + this.roleName + 'driverId' + this.driverId)
        }
    }
}


</script>
