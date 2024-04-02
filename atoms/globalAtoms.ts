import { atom } from 'jotai';

type globalType = {
    navbarVisibleAtom: boolean,
}
// export const globalAtom = atom<globalType>({
//     navbarVisibleAtom: false
// });

export const navbarVisibleAtom = atom<boolean>(false);