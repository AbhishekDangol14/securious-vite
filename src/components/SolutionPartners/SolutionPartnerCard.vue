<template>
    <div class="shadow-secondary rounded bg-white basis-1/3" v-if="partner">
        <div class="flex pt-2 mt-8 mx-8">
            <div class="mr-10 bg-contain w-32 grow">
            <img
                class="align-middle"
                src="@/assets/threats.png"
                alt=""
            />
            </div>
            <div class="text-base text-blue-blue font-bold mb-5">
            <div class="mb-1">
                <b class="text-blue-blue font-semibold cursor-pointer">
                EN
                </b>
                |
                <b class="text-blue-blue font-semibold cursor-pointer">DE</b>
            </div>
            <div>
                <Switch :alternate="true" class="my-2" v-model="partner.is_active" />
            </div>
            </div>
        </div>
        <div class="mx-8 mb-10">
            <div class="flex-fill">
            <div class="text-medium text-blue-blue font-semibold mt-4">
                {{ partner.friendlyTranslations[language+'.title'].value }}
            </div>
            <div class="text-base mt-2">
                <span class="text-grey-grey font-bold">Products: </span>
            </div>
            <div class="text-sm text-blue-blue">
                <a><b v-for="item in partner.solutionPartnersProducts" v-bind:key="item">
                    {{ item.friendlyTranslations[language+'.title'].value }}
                <span>,</span></b></a>
            </div>
            </div>
            <div class="flex mt-2 gap-4">
                <div class="flex flex-col relative" v-if="isSolutionPartner()">
                    <i class="fa fa-tag fa-rotate-90 absolute -top-3 left-1"></i>
                    <Tag name="tag-button" title="Solution Partner" />
                </div>
                <div class="flex flex-col relative" v-if="isCompanyAsset()">
                    <i class="fa fa-tag fa-rotate-90 absolute -top-3 left-1"></i>
                    <Tag name="tag-button" title="Company Assets" />
                </div>
            </div>
            <div class="my-4">
            <Button
                path_name="editSolutionpartners"
                :route_id="partner.id"
                class="primary-button px-6"
                title="Edit"
                name="edit-button"
            />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import Tag from "@/components/Tag.vue";
import Button from '@/components/Button.vue';

export default defineComponent({
    components: {
        Tag,
        Button
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    setup(props){
        const partner = toRef(props,'item')
        const language = localStorage.getItem('LANGUAGE')
        
        function isSolutionPartner(){
            return partner.value.solutionPartnersProducts[props.index].is_solution_partner
        }

        function isCompanyAsset(){
            return partner.value.solutionPartnersProducts[props.index].is_company_asset
        }
        return {
            partner,
            language,
            isSolutionPartner,
            isCompanyAsset
        }
    }
})
</script>


<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>