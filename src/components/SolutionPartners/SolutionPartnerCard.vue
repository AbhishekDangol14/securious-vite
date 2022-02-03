<template>
    <div class="input-box bg-white h-fit ml-8 shadow-xl rounded">
        <div class="padding p-8">
            <div class="grid grid-cols-2 justify-items-end">
                <div>
                    <img src="../../assets/components/gdata.png">
                </div>
                <div class="flex flex-col space-y-2">
                    <div class="translate">
                        EN | DE
                    </div>
                    <div class="relative inline-block w-8 ml-2 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-4 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label for="toggle" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>  
            </div>
            <div class="title text-lg font-semibold">
                G DATA
            </div>
            <div class="products">
                Products: 
            </div>
            <div class="tags-container flex">
                <div class="tags-label text-xs text-white bg-button p-1 rounded">Solution Partner</div>
            </div>
            <div class="grid grid-cols-2 pt-2">
                <div class="edit-button text-base text-white bg-button p-2 mr-6 rounded-full">
                    Edit
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
    }
</style>