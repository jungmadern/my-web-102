<template>
    <div class="bg-lime-800">
        <h1>This is Header Component</h1>
        <div class="flex gap-10">
            <slot name="l"></slot>
            <slot name="r"></slot>
        </div>
        <h6>This is Header Component</h6>
    </div>
</template>