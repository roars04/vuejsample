<template>
  <div class="d-flex row">
    <div class="menueImg">
      <img
        style="height: 50px; width: 50px; align-self: center"
        src="/favicon.ico"
        alt="TIN INN Logo"
      />
    </div>
    <div class="col-5">
      <h1 class="text-start">{{ menueTitle }}</h1>
    </div>
    <div class="col-7 d-flex justify-content-end">
      <div class="dropdown">
        <button
          id="selectLanguageButton"
          class="btn btn-secondary dropdown-toggle"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          type="button"
        >
          {{ langMenueTitle }}
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            v-for="{ lng, translation } in langMenueList"
            :id="lng"
            @click="emit('langMenueClick', lng)"
            :class="{ active: langMenueActive === lng }"
            >{{ translation }}</a
          >
        </div>
      </div>
    </div>
  </div>
  <div v-if="alertVisible" class="alert alert-danger" role="alert">
    {{ alertText }}
  </div>
</template>
<style>
.menueImg {
  position: absolute;
  margin-left: -25px !important; /* 50% of your logo width */
  left: 50%;
  height: 50px;
  width: 50px;
}
</style>
<script setup lang="ts">
const props: any = defineProps({
  menueTitle: { type: String, required: false },
  langMenueTitle: { type: String, required: true },
  langMenueList: { type: Array<{ lng; translation }>, required: true },
  langMenueActive: { type: String, required: false },
  alertText: { type: String, required: false },
  alertVisible: { type: Boolean, required: false, default: false },
});
const emit = defineEmits(["langMenueClick"]);
</script>
