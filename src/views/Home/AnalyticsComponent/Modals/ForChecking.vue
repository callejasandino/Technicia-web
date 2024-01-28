<template>
    <div>
        <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
        <dialog id="my_modal_4" class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-lg">Hello!</h3>
                <div class="overflow-x-auto overflow-y-auto max-sm:max-w-100">
                <table class="table">
                    <!-- head -->
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- row 1 -->
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    <!-- row 2 -->
                    <tr class="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

    const prop = defineProps<{
        jobOrderID?: string,
        header?: string,
        unit?: string,
        issue?: string,
        owner?: string,
        dateReceived?: string,
        receivedBy?: string,
    }>();

    const jobOrderID = computed(() => {
        return prop.jobOrderID;
    });

    const header = computed(() => {
        return prop.header;
    });

    const unit = computed(() => {
        return prop.unit;
    });

    const issue = computed(() => {
        return prop.issue;
    });

    const owner = computed(() => {
        return prop.owner;
    });

    const dateReceived = computed(() => {
        return prop.dateReceived;
    });

    const receivedBy = computed(() => {
        return prop.receivedBy;
    });
</script>

<style scoped>

</style>