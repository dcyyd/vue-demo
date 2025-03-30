<template>
    <main>
        <div class="info-container">
            <h2>{{ person.name }}</h2>
            <h2>{{ person.age }}</h2>
            <button class="btn" @click="changeName">增加~</button>&nbsp;
            <button class="btn" @click="changeAge">减1</button>
            <h2>{{ name }}</h2>
            <h2>{{ age }}</h2>
        </div>
    </main>
</template>

<script setup>
    import {reactive,toRef} from "vue"
    let p={
        name:"DouCY",
        age:18       
    }
    let person=reactive(p)
    let name=toRef(person,"name")
    let age=person.age
    function changeName(){
        person.name=person.name+"~"
        console.log(person.name)
    }
    function changeAge(){
        person.age=person.age-1
        console.log(person.age)
    }
</script>