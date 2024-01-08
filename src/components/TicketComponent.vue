<template>
  <div class="col">
    <div class="row">
      <div class="ticket" onclick="emit('Click')">
        <div class="top">&nbsp;</div>
        <div class="ticket-content-wrapper">
          <div class="logo">
            <svg
              width="15%"
              viewBox="0 -0.5 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="si-glyph si-glyph-circle-triangle-right"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>1026</title>
                <defs></defs>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    d="M9,16 C13.4191344,16 17,12.418 17,8 C17,3.582 13.4191344,0 9,0 C4.5808656,0 1,3.582 1,8 C1,12.418 4.5808656,16 9,16 L9,16 Z M7,4.15422321 C7.18603172,3.94859226 7.77465517,3.94859226 7.96068689,4.15422321 L12.8604762,7.6212565 C13.0465079,7.82688744 13.0465079,8.16067906 12.8604762,8.36631 L7.96068689,11.8457768 C7.77465517,12.0514077 7.18603172,12.0514077 7,11.8457768 L7,4.15422321 L7,4.15422321 Z"
                    fill="#54C3B4"
                    class="si-glyph-fill"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="header">
            <p>{{ header }}</p>
          </div>
          <div class="middle">
            <p>{{ middle }}</p>
          </div>
        </div>
        <div class="bottom">
          <p>{{ bottom }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.header,
.bottom {
  font-size: xx-large;
  font-weight: 700;
  color: rgb(6, 15, 60);
}
.header,
.bottom,
.middle,
.logo {
  min-width: 100%;
  min-height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
}
.middle {
  font-size: large;
  font-weight: 400;
  color: black;
}
.top {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(84, 195, 180);
  height: 5%;
  width: 100%;
}
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(191, 239, 202, 1) 0%,
    rgba(172, 222, 216, 1) 100%
  );
  height: 30%;
  width: 100%;
}
.ticket {
  position: relative;
  min-width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.1);
}

.ticket:before,
.ticket:after {
  content: "";
  display: block;
  position: absolute;
  top: 30%;
  width: 5%;
  height: 5%;
  border-radius: 50%;
  z-index: 2;
  background-color: #fff;
}

.ticket:before {
  box-shadow: 10px 0px rgb(0, 0, 0, 0.1);
  left: 0px;
  transform: translate(-100%);
}

.ticket:after {
  box-shadow: -10px 0px rgb(0, 0, 0, 0.1);
  right: 0px;
  transform: translate(100%);
}

.ticket-content-wrapper {
  background: transparent;
  height: 100%;
  width: 100%;
}
</style>
<script setup lang="ts">
const props: any = defineProps({
  logo: { type: undefined, required: false },
  header: { type: undefined, required: false },
  middle: { type: undefined, required: false },
  bottom: { type: undefined, required: false },
});
const emit = defineEmits(["Click"]);
</script>
