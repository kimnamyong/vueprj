<template>
    <div>
        <input type="text" 
        v-model="value"
         @keyup.enter="$emit('text',value); init()">

        <button type="button"
         @click="$emit('text',value)"
        
         >전달</button>
    </div>
</template>
<script>
export default {
    name:"MyText",    
    data(){
        return { value:""}
    },
    methods: {
        init(){
            this.value=""
        }
    },    
}
</script>
<style lang="">
    
</style>