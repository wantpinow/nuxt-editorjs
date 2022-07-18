<template>
  <div>
    <h1>Welcome to nuxt-editor-js!</h1>
    <client-only><editor-js v-model="dat" /></client-only>
    <button @click="save">SAVE</button>
    {{ dat }}
  </div>
</template>

<script setup>
const default_data = {
  time: 1657740840050,
  blocks: [
    { id: "uQ4FXT1mxh", type: "paragraph", data: { text: "asda<b>sda</b>sd" } },
    {
      id: "QdemKnDLBo",
      type: "paragraph",
      data: { text: "<b><i>asdx</i>.......</b>" },
    },
    { id: "hF5gadZWAO", type: "paragraph", data: { text: "asdasd" } },
    { id: "XCeW6XlB0W", type: "paragraph", data: { text: "asd" } },
    { id: "9pzx_escgC", type: "paragraph", data: { text: "asd" } },
    { id: "iTL3_HWXHn", type: "paragraph", data: { text: "asd" } },
    { id: "Ru6AlQxrDS", type: "paragraph", data: { text: "asdkdkd" } },
    { id: "KwbabhMF4Z", type: "paragraph", data: { text: "dk" } },
  ],
  version: "2.25.0",
};
const dat = ref(default_data);
const save = () => {
  console.log(foo);
};
</script>
