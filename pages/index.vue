<template>
  <div class="page">
    <section>
      <mainIntro />
    </section>

    <section>
      <p class="title"><span class="main-color">New</span> Arrivals</p>

      <mainItem :data="arrivals" />
    </section>

    <section>
      <p class="title"><span class="main-color">Shop By</span> Categories</p>

      <mainCategories />
    </section>

    <section>
      <p class="title">Popular <span class="main-color">products</span></p>

      <mainItem :data="products" />
    </section>
  </div>
</template>

<script setup>
import thumb1 from "@/assets/images/product1.jpg";
import thumb2 from "@/assets/images/product2.jpg";
import thumb3 from "@/assets/images/product3.jpg";
import thumb4 from "@/assets/images/product4.jpg";
import thumb5 from "@/assets/images/product5.jpg";
import thumb6 from "@/assets/images/product6.jpg";
import thumb7 from "@/assets/images/product7.jpg";

const arrivals = ref([
  {
    thumb: thumb1,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb2,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb3,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb4,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
]);

const products = ref([
  {
    thumb: thumb1,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb2,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb3,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb4,
    title: "Hp Pavilion i5",
    rating: 4,
    price: 899,
  },
  {
    thumb: thumb5,
    title: "Hp Pavilion i5",
    rating: 5,
    price: 899,
  },
  {
    thumb: thumb6,
    title: "Hp Pavilion i5",
    rating: 6,
    price: 899,
  },
  {
    thumb: thumb7,
    title: "Hp Pavilion i5",
    rating: 7,
    price: 899,
  },
  {
    thumb: thumb2,
    title: "Hp Pavilion i5",
    rating: 2,
    price: 899,
  },
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/index.scss" as index;
</style>