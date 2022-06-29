<template>
  <div id="editor"></div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import { ref, onMounted } from "vue";

const props = defineProps({
  data: {
    default: [],
  },
  onChangeTimeout: {
    default: 0,
  },
});

const emit = defineEmits(["onChange"]);
const data = ref(props.data);
const change_ready = ref(true);
const onChange = (api, event) => {
  api.saver.save().then(async (data) => {
    data.value = data;
    if (change_ready.value) {
      emit("onChange", { data });
      if (props.onChangeTimeout > 0) {
        change_ready.value = false;
        setTimeout(() => {
          change_ready.value = true;
        }, props.onChangeTimeout);
      }
    }
  });
};

onMounted(() => {
  const editor = new EditorJS({
    holder: "editor",
    minHeight: 0,
    onChange: onChange,
    data: props.data,
    logLevel: "ERROR",
  });
});
</script>
