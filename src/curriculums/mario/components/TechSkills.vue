<template>
  <dl class="kind-tech usual">
    <div class="field environments">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.ENVIRONMENTS') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.environments.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>
    <div class="field ides">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.IDES') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.ides.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>

    <div class="field languages">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.LANGUAGES') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.languages.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>

    <div class="field frontend">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.FRONTEND') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.frontend.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>

    <div class="field backend">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.BACKEND') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.backend.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>

    <div class="field dependencies">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.DEPENDENCIES') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.dependencies.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>

    <div class="field repositories">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.REPOSITORIES') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.repositories.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>
    <div class="field terminals">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.TERMINALS') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.terminals.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>
    <div class="field others">
      <dt class="name font-bold">{{ $t('MARIO.OTHER_DATA.TECH_SKILLS.OTHERS') }}:</dt>
      <dd class="techs">
        <ul class="tech-list">
          <li v-for="tech in techs.others.usual" :key="tech.name" class="tech">
            <component :is="iconMap[tech.icon]" class="icon icon--tech" />
            <span class="font-regular">{{ tech.name }}</span>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
</template>

<script lang="ts" setup>
import cvData from '../data/cv-data.json';
import { NpmIcon, GithubIcon } from '@/assets/icons/contact/contact.icons';
import {
  WindowsIcon,
  AndroidIcon,
  VisualStudioCodeIcon,
  JavascriptIcon,
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  AngularIcon,
  IonicIcon,
  ReactIcon,
  VueIcon,
  NodeIcon,
  NestIcon,
  BunIcon,
  RxjsIcon,
  PrettierIcon,
  GitlabIcon,
  TerminalIcon,
  GitIcon,
  WslIcon,
  CmdIcon,
  DockerIcon,
  PostmanIcon,
  ChatgptIcon,
} from '@/assets/icons/techs/techs.icons';

const techs = cvData.techs;

// iconMap needs strict types but SVGs currently infer as string. Disabling any check.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  NpmIcon,
  GithubIcon,
  WindowsIcon,
  AndroidIcon,
  VisualStudioCodeIcon,
  JavascriptIcon,
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  AngularIcon,
  IonicIcon,
  ReactIcon,
  VueIcon,
  NodeIcon,
  NestIcon,
  BunIcon,
  RxjsIcon,
  PrettierIcon,
  GitlabIcon,
  TerminalIcon,
  GitIcon,
  WslIcon,
  CmdIcon,
  DockerIcon,
  PostmanIcon,
  ChatgptIcon,
};
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
.kind-tech {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.group-fields {
  display: grid;
  gap: 5px;
  grid-template-columns: 55% 45%;
}
.field {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  flex-grow: 0;
  gap: 8px;
}
.techs {
  display: flex;
  gap: 10px;
  width: 100%;
}
.tech-list {
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.tech {
  flex-grow: 0;
  display: flex;
  align-items: center;
  gap: 3px;
}
</style>
