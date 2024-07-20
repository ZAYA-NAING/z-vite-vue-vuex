<script setup>
import { useStore } from 'vuex';
const store = useStore();

defineProps({
  msg: String,
});

function increment() {
  store.dispatch('increment', 1);
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <h1 class="font-bold text-2xl p-3">
      Vuex Store of the initial counter state
    </h1>
    <button
      type="button"
      class="border p-4 bg-blue-500 rounded-lg text-white"
      @click="increment"
    >
      Count is {{ $store.state.count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
