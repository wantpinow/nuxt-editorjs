<template>
  <div id="editor"></div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import { ref, onMounted } from "vue";

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
