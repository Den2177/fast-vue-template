export default {
    data() {
        return {
            isOpen: false,
        }
    },
    popupController: {},
    created() {

    },
    mounted() {

    },
    methods: {
        open() {
            let resolve, reject;

            let promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });

            this.$options.popupController = {resolve, reject};

            this.isOpen = true;

            return promise;
        },
        close() {
            this.$options.popupController.resolve(false);
            this.isOpen = false;
        },
        confirm() {
            this.$options.popupController.resolve(true);
            this.isOpen = false;
        }
    },
    computed: {

    },
    watch: {

    },
    template: `
    <div class="modal-bc" v-if="isOpen">
    <div class="card">
    <div class="modal-body">
    <slot name="content">
    
</slot>
<div class="flex-row mt20">
<button class="btn" @click="close">close</button>
<button class="btn" @click="confirm">ok</button>
</div>
</div>
</div>   
</div>
    `
}