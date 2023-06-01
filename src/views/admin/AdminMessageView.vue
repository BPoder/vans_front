<template>
    <div class="row justify-content-center">
        <div class="col col-4">
            <UserDropdown @event-emit-selected-user-id=""/>
            <div class="input-group m">
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button v-on:click="" type="button" class="btn btn-light m-2">Saada teade</button>
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
    name: 'AdminMessageView',
    components: {UserDropdown, MessageLogTable},
    data() {
        return {
            userId: sessionStorage.getItem('userId')
        }
    },
    methods: {



    }





}
</script>

