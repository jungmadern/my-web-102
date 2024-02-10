<template>
    <div class="bg-amber-800">
        <h1>This is Footer Component</h1>
        <div class="flex gap-10">
            <slot name="l" class="bg-stone-200"></slot>
            <slot name="r" class="bg-stone-900"></slot>
        </div>
        <h6>This is Footer Component</h6>
    </div>
</template>