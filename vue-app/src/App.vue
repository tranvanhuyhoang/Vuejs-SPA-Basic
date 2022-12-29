<template>
  <div>Vue app Start {{ testProps }}</div>
</template>

<script>
export default {
  name: "App",
  props: {
    testProps: String,
  },
};
</script>
