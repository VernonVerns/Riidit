<template></template>

<script>
export default {
    data() {
        return {
            showModal: false,
        };
    },
    props: {
        riidmore: Boolean,
    },
    watch: {
        /*eslint no-unused-vars: 0 */
        /*eslint no-undef: 0 */
        riidmore: function (newValue, oldValue) {
            if (newValue) {
                this.showModal = newValue;
            }
        },
        showModal: function (newValue, oldValue) {
            let modal = document.querySelector(".modal");
            console.log(newValue);
            if (newValue) {
                modal.style.display = "block";
            } else {
                modal.style.display = "none";
                // this.riidmore = false;
            }
        },
    },
    methods: {
        hideModal() {
            this.showModal = false;
        },
    },
};
</script>