import { atom } from 'recoil'

export const filmsAtom = atom({
    key: 'films',
    default: []
})

export const nameAtom = atom({
    key: 'name',
    default: ''
})

export const numberAtom = atom({
    key: 'number',
    default: 0,
})

export const numberArrayAtom = atom({
    key: 'numberArr',
    default: []
})

export const showListAtom = atom({
    key: 'showList',
    default: true,
})