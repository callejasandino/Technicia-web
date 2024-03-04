<template>
    <div class="calendar-height">
        <Qalendar class="overflow-auto"
            :events="events"
            :config="config"
        />
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Qalendar } from "qalendar";
import { ref } from "vue";
import "qalendar/dist/style.css";

const events = ref([
    {
        title: "Advanced algebra",
        with: "Chandler Bing",
        time: { start: "2024-02-19 12:05", end: "2024-02-19 13:35" },
        color: "yellow",
        id: "753944708f0f",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
    },
    {
        title: "Ralph on holiday",
        with: "Rachel Greene",
        time: { start: "2024-02-19 17:05", end: "2024-02-19 18:35" },
        color: "green",
        id: "5602b6f589fc",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
    },
    {
        title: "Ralph on holiday",
        with: "Rachel Greene",
        time: { start: "2024-02-19 19:05", end: "2024-02-19 20:35" },
        color: "green",
        id: "5602b6f589fc",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
    }
]);

const config = ref({
    defaultMode: "month",
        style: {
            colorSchemes: {
                meetings: {
                    color: "#fff",
                    backgroundColor: "#131313",
                },
                sports: {
                    color: "#fff",
                    backgroundColor: "#ff4081",
                },
            },
        },
    })
</script>

<style scoped>
    .calendar-height {
        height: 850px;
    }
</style>