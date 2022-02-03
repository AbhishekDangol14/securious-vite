<template>
    <div class="header-bar bg-white ml-1">
        <div class="header-text pl-12 pt-5 pb-3">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .header-text {
        color: #055ca8;
        font-weight: bold;
        font-size: 30px;
    }
</style>