<template>
    <main class="info-container">
        <h2>小黑书屋</h2>
        <ul>
            <li v-for="item in list1.list" :key="item.id">
                {{item.avater}}--->{{item.name}}
                <button @click="del(item.id)">Clear</button>
            </li>
        </ul> 
    </main>
</template>

<script setup>
    import {reactive} from "vue"
    let list1=reactive({
        list:[
            {id:1,avater:"曹雪芹",name:"红楼梦"},
            {id:2,avater:"曹雪芹",name:"红楼梦"},
            {id:3,avater:"曹雪芹",name:"红楼梦"},
            {id:4,avater:"曹雪芹",name:"红楼梦"}
        ]
    })
    function del(id){
        console.log(id)
        list1.list=list1.list.filter(item => item.id !==id)
        console.log(list1.list)
    }
</script>