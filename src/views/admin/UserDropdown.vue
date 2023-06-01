<template>
    <select v-model="selectedUserId" v-on:change="emitSelectedUserId" class="form-select mb-2" aria-label="Default select example">
        <option selected value="0">Vali saaja</option>
        <option v-for="user in users" :key="user.userId" :value="user.userId">{{user.username}}</option>
    </select>
</template>
<script>
import router from "@/router";

export default {
    name: 'UserDropdown',
    data() {
        return {
            selectedUserId: 0,
            users: [
                {
                    userId: 0,
                    username: ''
                }
            ]
        };
    },
    methods: {
        emitSelectedUserId() {
            this.$emit('event-emit-selected-user-id', Number(this.selectedUserId));
        },
        getUsers() {
            const currentUser = Number(sessionStorage.getItem('userId'));
            this.$http.get("/all-users")
                .then(response => {
                    this.users = response.data.filter(user => user.userId !== currentUser);
                })
                .catch(() => router.push({name: 'errorRoute'}))
        },
    },
    beforeMount() {
        this.getUsers()
    }
}
</script>