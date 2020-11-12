<template>
    <div class="single-headline">
        <div
            class="article-image"
            :style="`background-image: url(${$props.headline.urlToImage})`"
        ></div>
        <div class="content">
            <h3 class="headline-title">
                {{ $props.headline.title }}
            </h3>
            <p class="headline-description">
                {{ $props.headline.description }}
            </p>
            <div class="source-and-time">
                <h5 class="source">{{ $props.headline.source.name }}</h5>
                <div class="time-and-auther">
                    <span class="time">{{
                        $props.headline.publishedAt | formattedDate
                    }}</span>
                    <span
                        class="v-line"
                        v-if="$props.headline.author != null"
                    ></span>
                    <span class="auther">{{ $props.headline.author }}</span>
                </div>
            </div>

            <div id="riid_full" class="modal">
                <div class="modal-content">
                    <span id="closeRiidFull" class="close" @click="hideModal()"
                        >&times;</span
                    >
                    <h1>Testing</h1>
                </div>
            </div>

            <div class="text-center mt-4">
                <button
                    type="button"
                    class="riid-more"
                    id="view_riid_full"
                    @click="showModal()"
                >
                    Riid More
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headline: Object,
    },
    /*eslint no-undef: 0 */
    methods: {
        showModal() {
            console.log("Testing");
            $("#riid_full").hide("modal");
        },
        hideModal() {
            console.log("Testing");
            $("#riid_full").hide("modal");
        },
    },
};
</script>

<style>
</style>