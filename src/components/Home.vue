<template>
    <div id="news_app">
        <div class="riidit-navbar">
            <img src="../assets/img/logo.svg" alt="Riidit logo" class="logo" />
            <router-link to="/" class="menu-btn">
                <img src="../assets/img/menu-icon.svg" alt="Menu" />
            </router-link>
        </div>

        <searchFilter />

        <div class="news-wrapper">
            <div class="headline-list" v-if="headlines.length > 0">
                <singleHeadline
                    v-for="headline in headlines"
                    :key="headline.id"
                    :headline="headline"
                />
            </div>
        </div>
    </div>
</template>

<script>
import singleHeadline from "../widget/Headline";
import searchFilter from "../widget/SearchBar";
import { mapActions, mapState } from "vuex";
export default {
    components: {
        singleHeadline,
        searchFilter,
    },
    computed: {
        ...mapState(["headlines"]),
    },
    methods: {
        ...mapActions(["getHeadlines"]),
    },
    mounted() {
        this.getHeadlines();
    },
};
</script>
    