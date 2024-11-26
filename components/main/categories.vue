<template>
  <div class="category">
    <div
      class="category-item"
      v-for="(category, categoryIdx) in categories"
      :key="categoryIdx"
    >
      <div class="thumb">
        <div class="thumb-img" :style="{ backgroundImage: `url(${category.thumb})` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import thumb1 from "@/assets/images/cat5.jpg";
import thumb2 from "@/assets/images/cat3.jpg";
import thumb3 from "@/assets/images/cat2.jpg";
import thumb4 from "@/assets/images/cat1.jpg";

const categories = ref([
  { txt: "노트북", thumb: thumb1 },
  { txt: "스마트 워치", thumb: thumb4 },
  { txt: "해드폰", thumb: thumb2 },
  { txt: "모바일", thumb: thumb3 },
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/categories.scss" as categories;
</style>