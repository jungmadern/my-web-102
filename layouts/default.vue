<template>
    <div>
        <AppTestLink />
    </div>
    <div class="bg-red-200">
        <h1>This is Layout</h1>
        <HeaderAppHeader>
            <template v-slot:l>
                <div class="flex-1 bg-stone-200">
                    <p>L-top</p>
                </div>
            </template>
            <template #r>
                <div class="flex-1 bg-stone-200">
                    <p>R-top</p>
                </div>
            </template>
        </HeaderAppHeader>
        <NuxtPage></NuxtPage>
        <FooterAppFooter>
            <template v-slot:l>
                <div class="flex-1 bg-stone-200">
                    <p>L-bottom</p>
                </div>
            </template>
            <template #r>
                <div class="flex-1 bg-stone-200">
                    <p>R-bottom</p>
                </div>
            </template>
        </FooterAppFooter>
        <h6>This is Layout</h6>
    </div>
</template>

<style>
html {
    background-color: #333;
}
</style>