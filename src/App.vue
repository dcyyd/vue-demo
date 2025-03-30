<template>
  <main id="app">
    <!-- 循环渲染每个日期分组的测试 -->
    <div v-for="(group, index) in testGroups" :key="index">
      <h1 class="title">{{ group.date }}-Test-Vue</h1>
      <hr>
      <!-- 循环渲染每个分组内的测试组件 -->
      <div v-for="(test, testIndex) in group.tests" :key="testIndex">
        <h1 class="title-2">{{ test.name }}</h1>
        <component :is="test.component" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

// 0306
import About from './components/0306/About.vue';
import HelloWorld from './components/0306/HelloWorld.vue';

// 0310
import refApp1Test from './components/0310/1-0310-ref-test-1.vue';
import refApp2Test from './components/0310/2-0310-ref-test-2.vue';
import reactiveApp3Test from './components/0310/3-0310-ref&reactive-test.vue';

// 0313
import imgAppTest from './components/0313/1-0313-responsive-data-test.vue';
import toRefTest from './components/0313/2-0313-product-image-switching-test.vue';
import toRefsTest from './components/0313/3-0313-blackie-vending-machine-test.vue';

// 0317
import Vmodel01 from './components/0317/Vmodel01.vue';
import Vmodel02 from './components/0317/Vmodel02.vue';
import VIf from './components/0317/VIf.vue';
import VShow from './components/0317/VShow.vue';

// 0320
import VforArrs from './components/0320/VforArrs.vue';
import VforArrsObj from './components/0320/VforArrsObj.vue';
import VforArrsObjLx from './components/0320/VforArrsObjLx.vue';
import EventTest01 from './components/0320/EventTest01.vue';
import EventTest02 from './components/0320/EventTest02.vue';

// 0324
import LittleBlackBookstore from './components/0324/LittleBlackBookstore.vue';
import StyleBank from './components/0324/StyleBank.vue';
import watchInput from './components/0324/WatchInput.vue';
import WatchPay from './components/0324/WatchPay.vue';
import Computed from './components/0324/Computed.vue';

// 0327
import TestNavClassBank from './components/0327/TestNavClassBank.vue';
import TestComputed from './components/0327/Computed2.vue';
import TestStyleBank from './components/0327/TestStyleBank.vue';
import TestStyleArrayBank from './components/0327/TestStyleArrayBank.vue'

// 定义测试分组数据
const testGroups = ref([
  {
    date: '0306',
    tests: [
      { name: 'About', component: About },
      { name: 'HelloWorld', component: HelloWorld },
    ],
  },
  {
    date: '0310',
    tests: [
      { name: 'refApp1Test', component: refApp1Test },
      { name: 'refApp2Test', component: refApp2Test },
      { name: 'reactiveApp3Test', component: reactiveApp3Test },
    ],
  },
  {
    date: '0313',
    tests: [
      { name: 'imgAppTest', component: imgAppTest },
      { name: 'toRefTest', component: toRefTest },
      { name: 'toRefsTest', component: toRefsTest },
    ],
  },
  {
    date: '0317',
    tests: [
      { name: 'Vmodel01', component: Vmodel01 },
      { name: 'Vmodel02', component: Vmodel02 },
      { name: 'VIf', component: VIf },
      { name: 'VShow', component: VShow },
    ],
  },
  {
    date: '0320',
    tests: [
      { name: 'VforArrs', component: VforArrs },
      { name: 'VforArrsObj', component: VforArrsObj },
      { name: 'VforArrsObjLx', component: VforArrsObjLx },
      { name: 'EventTest01', component: EventTest01 },
      { name: 'EventTest02', component: EventTest02 },
    ],
  },
  {
    date: '0324',
    tests: [
      { name: 'LittleBlackBookstore', component: LittleBlackBookstore },
      { name: 'StyleBank', component: StyleBank },
      { name: 'watchInput', component: watchInput },
      { name: 'WatchPay', component: WatchPay },
      { name: 'Computed', component: Computed }
    ],
  },
  {
    date: '0327',
    tests: [
      { name: 'TestNavClassBank', component: TestNavClassBank },
      { name: 'TestComputed', component: TestComputed },
      { name: 'TestStyleBank', component: TestStyleBank },
      { name: 'TestStyleArrayBank', component: TestStyleArrayBank }
    ],
  },
]);
</script>