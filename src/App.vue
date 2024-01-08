<script setup lang="ts">
import Menue from "./components/Menue.vue";
import { useI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
const { t }: any = useI18n();
const langMenueList: any = Object.keys(messages ?? {}).map((value) => ({
  lng: value,
  translation: t("lng." + value),
}));
</script>

<template>
  <Menue
    :menueTitle="t('app.title')"
    :langMenueTitle="t('lng.lng')"
    :langMenueList="langMenueList"
    @langMenueClick="
      (lang) => {
        $i18n.locale = lang;
      }
    "
    :langMenueActive="$i18n.locale"
  />
  <main>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>
