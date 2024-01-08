<script setup lang="ts">
import BusinessForm from "../components/BusinessForm.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="row">
    <div class="col-lg-6 container-fluid mt-3">
      <div class="row">
        <BusinessForm />
      </div>
      <div class="row">
        <div class="col">
          <button
            id="ticketButton"
            @click="router.push({ path: '/TicketView' })"
            type="button"
            class="btn btn-primary btn-block mb-4"
          >
            Ticket
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
