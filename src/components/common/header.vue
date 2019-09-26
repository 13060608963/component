<template>
    <div class="header">
        I am header
        <button @click="_click">click me</button>
    </div>
</template>

<script>

    import BUS from '../../bus'

    export default {
        data() {
            return {
                num:0
            }
        },
        methods: {
            _click() {
                    this.num++
                BUS.$emit('headerHandler', ''+this.num+'')
            }
        }
    }
</script>

