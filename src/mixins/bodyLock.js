const bodyLockMixin = {
    methods: {
        lockBody() {
            const body = document.querySelector('body');
            const header = document.querySelector('header');

            body.classList.add('_lock');
            body.style.paddingRight = this.getScrollWidth();
            header.style.paddingRight = this.getScrollWidth();
        },
        unlockBody() {
            const body = document.querySelector('body');
            const header = document.querySelector('header');
            body.classList.remove('_lock');
            body.style.paddingRight = '0px';
            header.style.paddingRight = '0px';
        },
        getScrollWidth() {
            let div = document.createElement('div');

            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';

            document.body.append(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;

            div.remove();
            return scrollWidth + 'px';
        },
    },
};

export default bodyLockMixin;

// import bodyLockMixin from "@/mixins/bodyLockMixin";

// export default {
//   mixins: [bodyLockMixin],
//   // ...
// };

// methods: {
//   openModal() {
//     this.lockBody(); // блокирует прокрутку на заднем плане
//     this.isModalOpen = true;
//   },
//   closeModal() {
//     this.unlockBody(); // разблокировать прокрутку на заднем плане
//     this.isModalOpen = false;
//   }
// }
