<template>
    <div class="card ml-12 mr-12 mt-16 mb-16 shadow-primary">
        <div class="card-title bg-secondary p-5 text-xl text-blue-blue font-semibold"> 
            <slot name="title"></slot>
        </div>
        <div class="card-body p-5 bg-white">
            <slot name="content"></slot>
        </div>
    </div>
</template>

