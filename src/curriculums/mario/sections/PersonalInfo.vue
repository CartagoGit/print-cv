<template>
  <article class="cv-photo">
    <div class="wrapper-img">
      <img src="@/assets/img/mario.png" alt="Photo" />
    </div>
  </article>
  <article class="info">
    <h1>Mario Cabrero Volarich</h1>
    <div class="fields--wrapper">
      <div
        v-for="(key, index) in Object.keys(fieldsPosition)"
        :key="index"
        class="fields"
        :class="'fields--' + key"
      >
        <span
          v-for="(field, index) of fieldsPosition[key]"
          :key="index"
          class="field"
          :class="'field--' + field.kind"
        >
          <component :is="field.icon" class="icon icon--info" />
          <span class="font-bold">
            {{
              typeof field.value === "string" ? field.value : field.value.value
            }}
          </span>
        </span>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import type { IInfoContact } from "@/shared/interfaces/index.interfaces";
import { CONTACT_DATA } from "../data/contact.data";

const fields = CONTACT_DATA;
const leftFields = fields.filter((field) => field.position === "left");
const rightFields = fields.filter((field) => field.position === "right");
const fieldsPosition: Record<string, IInfoContact[]> = {
  left: leftFields,
  right: rightFields,
};
</script>

<style scoped lang="scss">
.cv-photo {
  position: relative;
  .wrapper-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52mm;
    height: 52mm;
    border-radius: 100%;
    border: solid 6px var(--primary);
    box-sizing: content-box;
    img {
      position: absolute;
      object-position: 50% 50%;
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 100%;
      /* clip-path: circle(50%); */
    }
  }
}
.info {
  display: flex;
  flex-direction: column;

  h1 {
    grid-column: 1 / 3;
  }

  .fields {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &--wrapper {
      flex: 1;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-right: 1rem;
    }
  }

  .field {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
