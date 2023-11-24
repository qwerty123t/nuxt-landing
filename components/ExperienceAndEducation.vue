<template>
    <div class="experience-and-education">
        <Experience />
        <Education />
    </div>
</template>

<script setup>
    import Experience from '~/components/Experience.vue';
    import Education from '~/components/Education.vue';
</script>


<style lang="scss">
    .experience-and-education {
        display: flex;
        flex-direction: column;
    }

    @container (min-width: 810px) {
        .experience-and-education {
            flex-direction: row;
        }
    }
</style>