import { getDataFromLocalStorage, setDataFromLocalSrorage } from 'ts/storage/localStorage/localStorageController';
import { themeSwitcher } from './refs';

const root: any = document.querySelector(':root')!;

themeSwitcher.addEventListener('click', onClickThemeSwitcher);

const themes = {
  default: {
    '--background-color': '#ffffff',
    '--main-color': '#000000',
    '--grey-color': '#8c8c8c',
    '--light-grey-color': '#f7f7f7',
  },
  dark: {
    '--background-color': '#050916',
    '--main-color': '#ffffff',
    '--grey-color': '#8c8c8c',
    '--light-grey-color': '#f7f7f7',
  },
};

const darkTheme = getDataFromLocalStorage<boolean>('darkTheme')!;
changeTheme(darkTheme);
themeSwitcher.checked = darkTheme;

function onClickThemeSwitcher(this: HTMLInputElement) {
  let checkedTheme: boolean = this.checked;
  setDataFromLocalSrorage('darkTheme', checkedTheme);

  const darkTheme = getDataFromLocalStorage<boolean>('darkTheme')!;
  changeTheme(darkTheme);
}

function changeTheme(isDarkTheme: boolean) {
  const theme = isDarkTheme ? 'dark' : 'default';
  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
