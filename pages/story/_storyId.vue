<template>
    <div class="container">
        <Header />
        <div class="content">
            <ChapterList :storyId="this.$route.params.storyId" />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import Breadcrumb from "@/components/Breadcrumb.vue";
    import ChapterList from "@/components/ChapterList.vue";
    import Footer from "@/components/Footer.vue";

    export default {
        components: {
            Header,
            Breadcrumb,
            ChapterList,
            Footer
        },
        created() {}
    };
</script>

<style>
</style>
