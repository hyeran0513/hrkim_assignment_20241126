<template>
  <div class="box">
    <div class="box-item" v-for="(item, index) in data" :key="index">
      <div class="thumb">
        <div
          class="thumb-img"
          :style="{ backgroundImage: `url(${item.thumb})` }"
        ></div>
      </div>

      <div class="details">
        <div class="title">{{ item.title }}</div>
        <div class="rating">
          <span v-for="n in 5" :key="n">
            <i v-if="n <= Math.floor(item.rating)" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
          </span>
        </div>
        <div class="price">${{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/item.scss" as item;
</style>