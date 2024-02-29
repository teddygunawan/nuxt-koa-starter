<script setup>
const getPosts = async () => {
  console.log("TEDDEH")
  const { data } = await useFetch("http://localhost:3001", {
    method: "GET",
  });
};
</script>

<template>
  <div>
    <button type="button" @click="getPosts">Hehehes</button>
    <NuxtWelcome />
  </div>
</template>
