<template>
  <div class="box">
    <div class="box-item" v-for="(item, index) in data" :key="index">
      <i class="bx" :class="`bx-${item.icon}`"></i>
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup>
const data = ref([
  { icon: 'purchase-tag', title: 'Free Shipping', content: 'Capped at $39 per order' },
  { icon: 'gift', title: 'Securety Payments', content: 'Up to 12 months installment' },
  { icon: 'book-reader', title: '14-Day Returns', content: 'Shop with confidence' },
  { icon: 'headphone', title: '24/7 Support', content: 'Delivered to your door' },
])
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/intro.scss" as intro;
</style>