<template>
  <div>
    <span class="cc-icons">
      <img class="cc" :src="withBase('cc-logo.svg#cc-logo')" alt="cc-logo" />
      <img class="cc" :src="withBase('cc-logo.svg#cc-zero')" alt="cc-zero" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<style scoped>
.cc {
  height: 64px;
  margin: 6px;
  display: inline;
}
.cc-icons {
  display: flex;
  justify-content: center;
}
</style>
