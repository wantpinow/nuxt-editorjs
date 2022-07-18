<template>
  <div class="editor-js-container">
    <div id="editor"></div>
    <editor-js-saved v-if="just_saved" />
  </div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import { ref, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    default: {},
  },
});

const value = ref(props.modelValue);
const just_saved = ref(false);
const save = () => {
  just_saved.value = true;
  setTimeout(() => {
    just_saved.value = false;
  }, 2000);
};
defineExpose({
  save,
});

const emit = defineEmits(["update:modelValue"]);
const change_ready = ref(true);

const editor = new EditorJS({
  holder: "editor",
  minHeight: 0,
  onChange: (api, event) => {
    api.saver.save().then(async (data) => {
      emit("update:modelValue", data);
      // value.value = data;
    });
  },
  data: props.modelValue,
  logLevel: "ERROR",
});
</script>

<style scoped>
.editor-js-container {
  position: relative;
}
</style>
