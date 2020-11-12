<template>
    <div class="search-filter">
        <div class="search-bar">
            <form @submit.prevent="submitSearch()">
                <input type="search" v-model="keywords" placeholder="Search" />
                <button type="submit" class="riidit-btn">Find</button>
            </form>
        </div>

        <div class="filter text-center">
            <date-picker
                class="date-picker"
                v-model="date"
                type="date"
            ></date-picker>
        </div>
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions } from "vuex";
export default {
    components: { DatePicker },
    data() {
        return {
            date: null,
            keywords: "",
        };
    },
    watch: {
        /* eslint no-unused-vars: 0 */
        date: function (newDate, oldDate) {
            this.dateFilter(newDate);
        },
        keywords: function (newKeywords, oldKeywords) {
            if (newKeywords == null || newKeywords == "") {
                this.search(newKeywords);
            }
        },
    },
    methods: {
        ...mapActions(["getHeadlines", "search", "dateFilter"]),
        submitSearch() {
            this.search(this.keywords);
        },
    },
};
</script>