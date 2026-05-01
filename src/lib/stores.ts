import { writable } from 'svelte/store';
import { profileData, profileDataEn, type ProfileData } from './data';

function createLanguageStore() {
  const { subscribe, set, update } = writable<'zh' | 'en'>('zh');

  return {
    subscribe,
    set,
    toggle: () => {
      update((lang) => (lang === 'zh' ? 'en' : 'zh'));
    },
  };
}

export const language = createLanguageStore();

export function getProfileData(lang: 'zh' | 'en'): ProfileData {
  return lang === 'zh' ? profileData : profileDataEn;
}
