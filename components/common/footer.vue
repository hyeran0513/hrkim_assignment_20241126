<template>
  <footer>
    <div class="footer-inner">
      <div class="box" v-for="(item, type) in data" :key="type">
        <div class="type">{{ type }}</div>

        <ul class="list">
          <li class="list-item" v-for="(listItem, index) in item" :key="index">
            <NuxtLink :to="listItem.link" v-if="listItem.link">
              {{ listItem.txt }}
            </NuxtLink>
            <span v-else>
              <i class="bx" :class="`bx-${listItem.icon}`" />{{
                listItem.txt
              }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const data = ref({
  EXTRAS: [
    { txt: "Brands", link: "/brands" },
    { txt: "Gift Certificate", link: "/gift" },
    { txt: "Affiliate", link: "/affiliate" },
    { txt: "Specials", link: "/specials" },
    { txt: "Site Map", link: "/sitemap" },
  ],
  INFORMATION: [
    { txt: "About Us", link: "/about" },
    { txt: "Privacy Policy", link: "/policy" },
    { txt: "Terms & Conditions", link: "/term" },
    { txt: "Contact Us", link: "/contact" },
    { txt: "Site Map", link: "/sitemap" },
  ],
  "MY ACCOUNT": [
    { txt: "My Account", link: "/account" },
    { txt: "Order History", link: "/history" },
    { txt: "Wish List", link: "/wish" },
    { txt: "blogletter", link: "/blogletter" },
    { txt: "Returns", link: "/returns" },
  ],
  "CONTACT US": [
    {
      txt: "42 Dream House, Dreammy street, 7131 Dreamville, USA",
      icon: "map",
    },
    { txt: "company@gmail.com", icon: "envelope" },
    { txt: "456-456-4512", icon: "phone" },
    { txt: "Dream City, USA", icon: "send" },
  ],
});
</script>
