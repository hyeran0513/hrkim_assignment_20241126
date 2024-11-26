<template>
  <header>
    <div class="header-inner">
      <div class="logo">CODEVO</div>

      <ul class="gnb">
        <li class="gnb-item" v-for="(gnb, gnbIdx) in gnbList" :key="gnbIdx">
          <NuxtLink
            :to="gnb?.link"
            >{{ gnb?.txt }}</NuxtLink
          >
        </li>
      </ul>

      <ul class="menu">
        <li
          class="menu-item"
          v-for="(menu, menuIdx) in menuList"
          :key="menuIdx"
        >
          <NuxtLink :to="menu?.link">
            <i class="bx" :class="`bx-${menu.icon}`"></i>
          </NuxtLink>

          <div v-if="menu.txt === '장바구니'" class="shopping-num">
            {{ shoppingNum }}
          </div>
        </li>

        <li class="menu-item">
          <button type="button" title="목록보기" class="btn-hamburger">
            <i class="bx bx-menu" />
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const shoppingNum = ref(3);

const gnbList = ref([
  { txt: "Home", link: "/" },
  { txt: "Shop", link: "/shop" },
  { txt: "Blog", link: "/blog" },
  { txt: "About", link: "/about" },
  { txt: "Contact", link: "/contact" },
]);

const menuList = ref([
  { txt: "검색", icon: "search" },
  { txt: "마이페이지", icon: "user" },
  { txt: "찜 목록", icon: "heart" },
  { txt: "장바구니", icon: "shopping-bag" },
]);
</script>