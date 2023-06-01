<template>
    <div class="col mt-2 fw-bold fs-5 text-center">
        Logi
    </div>
    <span class="border-dark col-6 mt-5">
            <table class="table-secondary">
                <table class="table">
                    <tbody>
                    <tr v-for="message in messages" class="mt-3 ">
                        <th class="col-2" scope="row">{{ message.senderUsername }}</th>
                        <th class="col-6">{{ message.messageText }}</th>
                    </tr>
                    </tbody>
                </table>
            </table>
    </span>

</template>
<script>
import router from "@/router";

export default {
    name: 'MessageLogTable',
    data() {
        return {
            selectedUserId: sessionStorage.getItem('userId'),
            messages: [
                {
                    messageId: 0,
                    receiverUsername: '',
                    senderUsername: '',
                    messageText: '',
                    messageDateTime: '',
                    messageStatus: ''
                }
            ]
        }
    },
    methods: {
        getMessages: function () {
            this.$http.get("/message/view", {
                    params: {
                        userId: this.selectedUserId,
                    }
                }
            ).then(response => {
                this.messages = response.data
            }).catch(() => router.push({name: 'errorRoute'}));
        },
    },

    beforeMount() {
        this.getMessages()
    }


}
</script>