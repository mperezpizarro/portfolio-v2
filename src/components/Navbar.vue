<script setup>
    import { ref } from 'vue';

    const isVisible = ref(false)

    function toggleVisible() {
        console.log(isVisible);
        isVisible.value = !isVisible.value
    }
</script>

<template>
    <ul class="hidden md:flex flex-grow w-full items-center justify-end gap-x-6">
        <li class="w-fit">
            <a class="text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#inicio">INICIO</a>
        </li>
        <li class="w-fit">
            <a class="text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#experiencia">EXPERIENCIA</a>
        </li>
        <li class="w-fit">
            <a class="text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#proyectos">PROYECTOS</a>
        </li>
    </ul>

    <button aria-label="Abrir menú" class="flex justify-end w-full md:hidden text-xl text-slate-100" @click="toggleVisible">
        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/></svg>
    </button>

    <div class="block md:hidden relative">
        <ul class="flex flex-col transition animate-fade animate-duration-100 bg-cGray w-full h-screen fixed z-20 top-0 left-0 py-6 px-4 gap-y-2" :class="isVisible ? 'translate-y-0' : 'translate-x-[-200%]'">
            <button aria-label="Cerrar menú" class="flex justify-end w-full text-slate-100" @click="toggleVisible">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
            </button>
            <li class="w-full">
                <a @click="toggleVisible()" class="text-center text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#inicio">INICIO</a>
            </li>
            <li class="w-full">
                <a @click="toggleVisible()" class="text-center text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#experiencia">EXPERIENCIA</a>
            </li>
            <li class="w-full">
                <a @click="toggleVisible()" class="text-center text-slate-100 hover:text-slate-300 transition font-semibold tracking-wide text-base inline-block w-full" href="#proyectos">PROYECTOS</a>
            </li>
        </ul>
    </div>
</template>