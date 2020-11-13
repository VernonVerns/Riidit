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

            <div class="text-center mt-4">
                <a
                    :href="$props.headline.url"
                    target="_blank"
                    type="button"
                    class="riid-more"
                    id="view_riid_full"
                >
                    Riid More
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headline: Object,
    },
};
</script>

<style>
</style>