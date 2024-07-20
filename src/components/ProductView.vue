<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import avatarProfile from '@/assets/images/avatar.png';

/**
 * The `store` variable is used to access the Vuex store in the `Products.vue` component.
 * It is initialized using the `useStore` function from the `vuex` package.
 */
const store = useStore();

defineProps({
  msg: String,
});

const products = computed(() => {
  return store.state.productsModule.products;
});

const totalProductsCount = computed(() => {
  return store.getters['productsModule/totalProductsCount'];
});

const totalPrice = computed(() => {
  return store.getters['productsModule/totalPrice'];
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <ul
      v-for="product of products"
      :key="product.id"
      role="list"
      class="divide-y divide-gray-100"
    >
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            :src="avatarProfile"
            alt="product-image"
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ product.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ product.id }}
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ product.price }} ks</p>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
        
      </li>
    </ul>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">Total Price: {{ totalPrice }}</p>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            Quantity x {{ totalProductsCount }}
          </p>
        </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
