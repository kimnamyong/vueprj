<template>

 <div>

        <input type="text"
        v-model="value"
         @keyup.enter="$emit('text',value)">
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

    }    

}

</script>

<style lang="">

   

</style>

 