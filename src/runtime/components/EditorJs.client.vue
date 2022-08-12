<template>
  <div id="editor"></div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import { onMounted } from "vue";

const props = defineProps({
  modelValue: {
    default: {},
  },
});

const emit = defineEmits(["update:modelValue"]);
onMounted(() => {
  const editor = new EditorJS({
    holder: "editor",
    minHeight: 0,
    tools: {
      header: Header,
      list: List,
    },
    onChange: (api, event) => {
      api.saver.save().then(async (data) => {
        emit("update:modelValue", data);
      });
    },
    data: props.modelValue,
    logLevel: "ERROR",
  });
});
</script>
