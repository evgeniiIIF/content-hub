const mobileMixin = {
    data() {
        return {
            isMobile: false,
            isMobileForHead: false,
            md: false,
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); // проверить при загрузке страницы
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth < 992;
            this.isMobileForHead = window.innerWidth < 1521;
            this.md = window.innerWidth < 768;
        },
        setClassMobileBody() {
            const body = document.querySelector('body');
            body.classList.add('_mobile');
        },
        unsetClassMobileBody() {
            const body = document.querySelector('body');
            body.classList.remove('_mobile');
            body.classList.remove('_lock');
        },
        setClassForHeadMobileBody() {
            const body = document.querySelector('body');
            body.classList.add('_mobile--header');
        },
        unsetClassForHeadMobileBody() {
            const body = document.querySelector('body');
            body.classList.remove('_mobile--header');
            body.classList.remove('_lock');
        },
    },
    watch: {
        isMobile() {
            if (this.isMobile) {
                this.setClassMobileBody();
            } else {
                this.unsetClassMobileBody();
            }
        },
        isMobileForHead() {
            if (this.isMobileForHead) {
                this.setClassForHeadMobileBody();
            } else {
                this.unsetClassForHeadMobileBody();
            }
        },
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
};

export default mobileMixin;
