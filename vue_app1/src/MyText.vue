<template>
    <div>
        <input type="text" v-model="value">
        <button type="button" @click="$emit('text',value)">전달</button>
    </div>
</template>
<script>
export default {
    name:"MyText",
    data(){
        return { value:""}
    }    
}
</script>
<style lang="">
    
</style>