<template>
    <div class="card ml-8 ml-8 mt-2 shadow-primary">
        <div class="card-title bg-secondary p-5 text-xl text-blue-blue font-semibold"> 
            <slot name="title"></slot>
        </div>
        <div class="card-body p-5">
            <slot name="content"></slot>
        </div>
    </div>
</template>

