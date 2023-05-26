<template>
    <div class="btn-group me-2">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
            Kõik sõidukid
        </button>
        <ul class="dropdown-menu">
            <p>Renault</p>
            <p>Mazda</p>
            <p>Whatever</p>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'VansDropdown'
}
</script>