<script setup lang="ts">
import { store } from "@/store";

import { useRouter } from "vue-router";
const router = useRouter();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <form @keydown.enter="">
    <div class="form-outline mb-4">
      <label for="firstname" class="form-label h5">{{
        t("form.firstname")
      }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="firstname"
          class="form-control"
          v-model="store.form.firstname"
          :placeholder="t('form.firstnamePlaceholder')"
        />
      </div>
    </div>
    <div class="form-outline mb-4">
      <label for="lastname" class="form-label h5">{{
        t("form.lastname")
      }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="lasname"
          class="form-control"
          v-model="store.form.lasname"
          :placeholder="t('form.lastnamePlaceholder')"
        />
      </div>
    </div>

    <div class="form-outline mb-4">
      <label for="birthdate" class="form-label h5">{{
        t("form.birthdate")
      }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="birthdate"
          class="form-control"
          v-model="store.form.birthdate"
          :placeholder="t('form.birthdatePlaceholder')"
        />
      </div>
    </div>
    <label for="email" class="form-label h5">{{ t("form.email") }}</label>
    <div v-for="(email, index) in store.form.email">
      <div class="form-outline mb-4">
        <div class="input-group has-validation">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ email.type == undefined ? "Typ" : t("form." + email.type) }}
            </button>
            <ul class="dropdown-menu">
              <li v-if="index == 0">
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      email.type = 'business';
                      while (store.form.email.length > 1) {
                        store.form.email.pop();
                      }
                    }
                  "
                  >{{ t("form.business") }}</a
                >
              </li>
              <li v-if="index == 0">
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      email.type = 'private';
                      while (store.form.email.length > 1) {
                        store.form.email.pop();
                      }
                    }
                  "
                  >{{ t("form.private") }}</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="() => (email.type = 'other')"
                  >{{ t("form.other") }}</a
                >
              </li>
            </ul>
          </div>
          <input
            type="text"
            id="email"
            class="form-control"
            v-model="email.value"
            :placeholder="t('form.emailPlaceholder')"
          />
        </div>
      </div>
    </div>
    <div>
      <button
        id="addEmailButton"
        @click="
          () => {
            store.form.email.push({
              type: undefined,
              value: '',
              primary: false,
            });
          }
        "
        type="button"
        class="btn btn-primary btn-block mb-4"
        v-if="
          !(
            store.form.email[0].type == 'business' ||
            store.form.email[0].type == 'private' ||
            store.form.email.length == 4
          )
        "
      >
        {{ t("form.addEmail") }}
      </button>
      <button
        id="removeEmailButton"
        @click="
          () => {
            store.form.email.pop();
          }
        "
        v-if="store.form.email.length > 1"
        type="button"
        class="btn btn-primary btn-block mb-4"
      >
        {{ t("form.remove") }}
      </button>
    </div>
    <label for="phone" class="form-label h5">{{ t("form.phone") }}</label>
    <div class="form-outline mb-4" v-for="(phone, index) in store.form.phone">
      <div class="input-group has-validation">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ phone.type == undefined ? "Typ" : t("form." + phone.type) }}
          </button>
          <ul class="dropdown-menu">
            <li v-if="index == 0">
              <a
                class="dropdown-item"
                href="#"
                @click="
                  () => {
                    phone.type = 'primary';
                    while (store.form.phone.length > 1) {
                      store.form.phone.pop();
                    }
                  }
                "
                >{{ t("form.primary") }}</a
              >
            </li>
            <li v-if="index == 0">
              <a
                class="dropdown-item"
                href="#"
                @click="
                  () => {
                    phone.type = 'mobile';
                    while (store.form.phone.length > 1) {
                      store.form.phone.pop();
                    }
                  }
                "
                >{{ t("form.mobile") }}</a
              >
            </li>
            <li v-if="index == 0">
              <a
                class="dropdown-item"
                href="#"
                @click="
                  () => {
                    phone.type = 'business';
                    while (store.form.phone.length > 1) {
                      store.form.phone.pop();
                    }
                  }
                "
                >{{ t("form.business") }}</a
              >
            </li>
            <li v-if="index == 0">
              <a
                class="dropdown-item"
                href="#"
                @click="
                  () => {
                    phone.type = 'private';
                    while (store.form.phone.length > 1) {
                      store.form.phone.pop();
                    }
                  }
                "
                >{{ t("form.private") }}</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="() => (phone.type = 'other')"
                >{{ t("form.other") }}</a
              >
            </li>
          </ul>
        </div>
        <input
          type="text"
          id="phone"
          class="form-control"
          v-model="phone.value"
          :placeholder="t('form.phonePlaceholder')"
        />
      </div>
    </div>
    <button
      id="addPhoneButton"
      @click="
        () => {
          store.form.phone.push({
            type: undefined,
            value: '',
            primary: false,
          });
        }
      "
      type="button"
      class="btn btn-primary btn-block mb-4"
      v-if="
        !(
          store.form.phone.length == 3 ||
          ['business', 'private', 'primary', 'mobile'].includes(
            store.form.phone[0].type!
          )
        )
      "
    >
      {{ t("form.addPhoneNumber") }}
    </button>
    <button
      id="removePhoneButton"
      @click="
        () => {
          store.form.phone.pop();
        }
      "
      v-if="store.form.phone.length > 1"
      type="button"
      class="btn btn-primary btn-block mb-4"
    >
      {{ t("form.remove") }}
    </button>
    <div class="form-outline mb-4">
      <label for="street" class="form-label h5">{{ t("form.street") }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="street"
          class="form-control"
          v-model="store.form.street"
          :placeholder="t('form.streetPlaceholder')"
        />
      </div>
    </div>

    <div class="form-outline mb-4">
      <label for="zip" class="form-label h5">{{ t("form.zip") }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="zip"
          class="form-control"
          v-model="store.form.zip"
          :placeholder="t('form.zipPlaceholder')"
        />
      </div>
    </div>

    <div class="form-outline mb-4">
      <label for="city" class="form-label h5">{{ t("form.city") }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="city"
          class="form-control"
          v-model="store.form.city"
          :placeholder="t('form.cityPlaceholder')"
        />
      </div>
    </div>

    <div class="form-outline mb-4">
      <label for="country" class="form-label h5">{{ t("form.country") }}</label>
      <div class="input-group has-validation">
        <input
          type="text"
          id="country"
          class="form-control"
          v-model="store.form.country"
          :placeholder="t('form.countryPlaceholder')"
        />
      </div>
    </div>

    <button
      id="confirmButton"
      @click="
        () => {
          console.log(store.form);
        }
      "
      type="button"
      class="btn btn-primary btn-block mb-4"
    >
      {{ t("form.confirm") }}
    </button>
  </form>
</template>
