<script setup lang="ts">
import TicketComponent from "../components/TicketComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="row w-25 p-3">
    <TicketComponent
      header="Free Access to Acme Music"
      bottom="Connect now"
      @click="() => {}"
    >
      <div>
        <p>
          <i class="bi bi-check" style="color: orange"></i> Stream 60 million
          songs on your device
        </p>
        <p><i class="bi bi-x" style="color: orange"></i> No internet access</p>
      </div>
    </TicketComponent>
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
