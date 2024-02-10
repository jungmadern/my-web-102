<template>
    <div class="bg-yellow-200">
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
            </div>
        </ContentList>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'blog-default'
})
</script>