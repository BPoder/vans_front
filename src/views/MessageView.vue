<template>
    <div class="row justify-content-center">
        <div class="col col-4">
            <UserDropdown v-model="userMessage.receiverUserId" @event-emit-selected-user-id="selectedUserId"/>
            <div class="input-group m">
                <textarea v-model="userMessage.messageText" class="form-control" aria-label="With textarea" placeholder="Sisesta teade siia"></textarea>
            </div>
            <button v-on:click="addMessage" type="button" class="btn btn-secondary btn-sm m-2">Saada teade</button>
        </div>
        <div>

        </div>
        <span class="border border-dark col-6 mt-5">
            <MessageLogTable ref="messageLogTableRef"/>
            </span>
    </div>
</template>

<script>
import MessageLogTable from "@/components/MessageLogTable.vue";
import UserDropdown from "@/views/admin/UserDropdown.vue";

export default {
    name: 'MessageView',
    components: {UserDropdown, MessageLogTable},
    data() {
        return {
            // userId: sessionStorage.getItem('userId'),
            selectedUserId: 0,
            userMessage: {
                messageText: '',
                receiverUserId: 0,
                senderUserId: sessionStorage.getItem('userId')
            }
        }
    },
    methods: {
        addMessage: function () {
            this.$http.post("/message", this.userMessage
            ).then(response => {
                alert('õnnestus')
                const responseBody = response.data
                this.userMessage.messageText = ''
                window.location.reload()
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
    }
}
</script>

