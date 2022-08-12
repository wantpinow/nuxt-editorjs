<template>
  <div>
    <client-only><editor-js v-model="dat" /></client-only>
    <pre>
      {{ dat }}
    </pre>
  </div>
</template>

<script setup>
const default_data = {
  time: 1660335428612,
  blocks: [
    {
      id: "MnGi61oxdF",
      type: "header",
      data: {
        text: "Welcome to nuxt-editorjs!",
        level: 1,
      },
    },
    {
      id: "b_Ju7U6wPl",
      type: "paragraph",
      data: {
        text: "This is a nuxt3 plugin for editorjs.",
      },
    },
    {
      id: "R3o5BpI-r9",
      type: "paragraph",
      data: {
        text: "<b>A paragraph of text:</b>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis molestias neque autem cumque provident? Laudantium ad, quisquam quos nulla amet, perferendis recusandae voluptates eligendi cupiditate consectetur veniam! Ipsum, ullam?",
      },
    },
    {
      id: "b9mkw6ZO92",
      type: "header",
      data: {
        text: "Heading 1",
        level: 1,
      },
    },
    {
      id: "P2PZsHo2lq",
      type: "header",
      data: {
        text: "Heading 2",
        level: 2,
      },
    },
    {
      id: "hHJZjkW-TO",
      type: "header",
      data: {
        text: "Heading 3",
        level: 3,
      },
    },
    {
      id: "k8EDwa0oVG",
      type: "header",
      data: {
        text: "Heading 4",
        level: 4,
      },
    },
    {
      id: "62ciFnEFjZ",
      type: "header",
      data: {
        text: "Heading 5",
        level: 5,
      },
    },
    {
      id: "YCBcKhNqib",
      type: "header",
      data: {
        text: "Heading 6",
        level: 6,
      },
    },
    {
      id: "s_J3d5U8DA",
      type: "list",
      data: {
        style: "ordered",
        items: [
          "An ordered list item",
          "Another ordered list item",
          "One more",
        ],
      },
    },
    {
      id: "kMyQbO156y",
      type: "list",
      data: {
        style: "unordered",
        items: ["An unordered list item!", "In italics?", "Or bold?"],
      },
    },
  ],
  version: "2.25.0",
};
const dat = ref(default_data);
const save = () => {
  console.log(foo);
};
</script>
