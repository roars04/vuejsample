<script setup lang="ts">
import TicketComponent from "../components/TicketComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="row w-25 p-3">
    <TicketComponent
      header="Free Access to Acme Music"
      middle="- Stream 60 million songs on your device - No internet access"
      bottom="Connect now"
    />
  </div>
  <div class="row">
    <div class="col">
      <button
        id="BusinessButton"
        @click="router.push('/')"
        type="button"
        class="btn btn-primary btn-block mb-4"
      >
        Business
      </button>
    </div>
  </div>
</template>
