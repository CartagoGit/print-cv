<template>
  <figure class="cv-photo">
    <div class="wrapper-img">
      <img src="@/assets/img/mario.png" alt="Photo" />
    </div>
  </figure>
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
          <component :is="iconMap[field.icon]" class="icon icon--info" />
          <span class="font-bold">
            {{ typeof field.value === 'string' ? field.value : field.value.value }}
          </span>
          <QRCodeWrapper
            v-if="['github', 'linkedin'].includes(field.kind) && !isPublicMode"
            :value="
              'https://' + (typeof field.value === 'string' ? field.value : field.value.value)
            "
            :size="40"
            class="print-only ml-2"
          />
        </span>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import cvData from '../data/cv-data.json';
import {
  EmailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  BirthdayIcon,
  NpmIcon,
  WorldIcon,
  CertificatesIcon,
} from '@/assets/icons/contact/contact.icons';
import { DockerIcon } from '@/assets/icons/techs/techs.icons';
import { tPlace } from '../helpers/traductor.helper';
import type { IInfoContact } from '@/shared/interfaces/index.interfaces';
import QRCodeWrapper from '@/shared/components/QRCodeWrapper.vue';

import type { CvData } from '../data/cv-schema';

const iconMap: Record<string, object | string> = {
  EmailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  BirthdayIcon,
  NpmIcon,
  WorldIcon,
  CertificatesIcon,
  DockerIcon,
};

const isPublicMode = import.meta.env.VITE_PUBLIC_MODE === 'true';

const typedCvData = cvData as unknown as CvData;
const contactData = typedCvData.contact as (IInfoContact & { isPlace?: boolean })[];

const fields = computed(() => {
  return contactData.map((item) => {
    let value = item.value;
    // Check if value is a string before passing to tPlace to satisfy types if needed,
    // though IInfoContact.value can be Ref. JSON data is string.
    if (item.isPlace && typeof item.value === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value = tPlace(item.value as any, { pre: '41008 - ' }).value;
    }

    if (isPublicMode) {
      if (item.kind === 'phone') value = '*** ** ** **';
      if (item.kind === 'email') value = '*******@gmail.com';
    }

    return {
      ...item,
      value,
    };
  });
});

const leftFields = computed(() => fields.value.filter((field) => field.position === 'left'));
const rightFields = computed(() => fields.value.filter((field) => field.position === 'right'));

const fieldsPosition = computed<Record<string, IInfoContact[]>>(() => ({
  left: leftFields.value,
  right: rightFields.value,
}));
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
