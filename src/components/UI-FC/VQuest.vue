<template>
  <div class="quest">
    <div class="quest__progress progress-quest">
      <p class="progress-quest__text">ШАГ {{ currentQuestionNumber }}</p>
      <ul class="progress-quest__list">
        <li
          class="progress-quest__item item-progress-quest"
          v-for="(item, index) in questions.length"
          :key="index"
          :class="item <= currentQuestionNumber ? 'item-progress-quest--active' : ''"
        >
          <div
            class="item-progress-quest__line"
            v-if="item !== 1"
          >
            <div class="item-progress-quest__line-done"></div>
          </div>
          <div class="item-progress-quest__circle"></div>
        </li>
      </ul>
    </div>
    <div class="quest__question">
      <Transition
        name="fade-in"
        mode="out-in"
      >
        <component
          :is="currentQuestionOpts.componentIs"
          :opts="currentQuestionOpts"
          @onInput="onInput"
          @onShowDialogPrivacy="onShowDialogPrivacy"
        >
        </component>
      </Transition>
    </div>
    <div
      class="quest__button button-quest"
      v-if="currentQuestionNumber < questions.length"
    >
      <VButton
        @click="nextQuestion"
        :disabled="!isValidQuestion"
        :style="{ width: messagePending ? '138px' : '', padding: messagePending ? '12px' : '' }"
      >
        <span
          class="button-quest__text"
          v-if="currentQuestionNumber !== 3"
        >
          Далее
        </span>
        <span
          class="button-quest__text"
          v-else-if="currentQuestionNumber == 3 && !messagePending"
        >
          Завершить
        </span>
        <span
          class="loading"
          v-else
        >
        </span>

        <img
          v-if="!messagePending"
          src="@/assets/img/main/cost/Chevron_Right.svg"
          alt="arrow"
          class="button-quest__arrow"
        />
      </VButton>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import mobileMixin from '@/mixins/mobileMode';

  import VButton from '../UI/VButton.vue';
  import VQuestion1 from '@/components/questions/VQuestion1.vue';
  import VQuestion2 from '@/components/questions/VQuestion2.vue';
  import VQuestion3 from '@/components/questions/VQuestion3.vue';
  import VQuestion4 from '@/components/questions/VQuestion4.vue';

  export default {
    name: 'quest',
    components: {
      VButton,
      VQuestion1,
      VQuestion2,
      VQuestion3,
      VQuestion4,
    },
    // props: {
    //     questionsCountAll: {
    //         type: Number,
    //     },
    //     currentQuestionNumber: {
    //         type: Number,
    //     },
    //     progressQuestPercents: {
    //         type: Number,
    //     },
    //     questionObject: {
    //         type: Object,
    //     },
    // },

    mixins: [mobileMixin],

    data() {
      return {
        showQuestForMobile: false,
        currentQuestionNumber: 1,
        isValidQuestion: false,
        valueName: '',
        valueTel: '',

        questions: [
          {
            componentIs: 'VQuestion1',
            componentNumber: 1,
            title: '1. Заполните информацию об автомобиле',
            inputOpts: {
              value: '',
              label: 'Марка и модель авто',
              type: 'text',
              name: 'auto',
              placeholder: 'Введите данные автомобиля',
              maxlength: 128,
            },
          },
          {
            componentIs: 'VQuestion2',
            componentNumber: 2,
            title: '2. Опишите вашу проблему / что нужно сделать?',
            inputOpts: {
              value: '',
              textarea: true,
              label: 'Комментарий',
              type: 'textarea',
              name: 'problem',
              placeholder: 'Опишите проблему',
              maxlength: 128,
            },
          },
          {
            componentIs: 'VQuestion3',
            componentNumber: 3,
            title: '3. Оставьте ваши контактные данные',
            inputOpts: {
              inputName: {
                value: '',
                type: 'text',
                name: 'name',
                label: 'Имя',
                placeholder: 'Введите имя',
                maxlength: 32,
              },
              inputTel: {
                value: '',
                type: 'tel',
                name: 'phone',
                label: 'Телефон',
                placeholder: '+7 (___) ___-__-__',
                pattern: /[^0-9+]/g,
              },
            },
          },
          {
            componentIs: 'VQuestion4',
            componentNumber: 4,
            titleTop: 'Спасибо!',
            titleBottom: 'Ваша заявка отправлена успешно.',
            text: 'Специалист свяжется с Вами в ближайшее время.',
          },
        ],
      };
    },
    computed: {
      ...mapGetters('form', {
        // messageSent: 'success',
        messagePending: 'pending',
      }),
      currentQuestionOpts() {
        return this.questions[this.currentQuestionNumber - 1];
      },
      questionsCountAll() {
        return this.questions.length;
      },

      progressQuestPercents() {
        let done = 0;
        let result;

        for (let i = 0; i < this.questionsCountAll; i++) {
          if (this.questions[i].currentPicked !== '') {
            done++;
          }
        }
        result = (done / this.questionsCountAll) * 100;
        return result;
      },
    },
    methods: {
      ...mapActions('form', ['SEND_USER_DATA']),

      onShowDialogPrivacy() {
        this.$emit('onShowDialogPrivacy');
      },

      updatePicked(variant) {
        this.currentQuestionOpts.currentPicked = variant;
      },
      async nextQuestion() {
        if (this.currentQuestionNumber >= this.questions.length - 1) {
          const userData = {
            formname: 'Быстрый и простой расчет стоимости ремонта и обслуживания автомобиля',
            model: this.questions[0].inputOpts.value,
            comment: this.questions[1].inputOpts.value,
            name: this.questions[2].inputOpts.inputName.value,
            phone: this.questions[2].inputOpts.inputTel.value,
          };
          await this.SEND_USER_DATA(userData);
          this.currentQuestionNumber++;
        }
        if (this.currentQuestionNumber < this.questions.length - 1) {
          this.currentQuestionNumber++;
        }
      },
      onInput(e) {
        if (this.currentQuestionOpts.componentIs === 'VQuestion3') {
          if (e.inputName === 'inputName') {
            this.valueName = e.value;
          }
          if (e.inputName === 'inputTel') {
            this.valueTel = e.value;
          }
          if (!!this.valueName && !!this.valueTel) {
            this.isValidQuestion = this.valueName.length >= 2 && this.valueTel.length === 18;
          }
          this.currentQuestionOpts.inputOpts[e.inputName].value = e.value;
        }
        if (this.currentQuestionOpts.componentIs === 'VQuestion1') {
          this.isValidQuestion = e.value.length >= 2;
          this.currentQuestionOpts.inputOpts.value = e.value;
        }
        if (this.currentQuestionOpts.componentIs === 'VQuestion2') {
          this.isValidQuestion = e.value.length >= 2;
          this.currentQuestionOpts.inputOpts.value = e.value;
        }
      },
    },
    watch: {
      isMobile() {
        if (!this.isMobile) {
          this.showQuestForMobile = false;
        }
      },
      currentQuestionNumber() {
        this.isValidQuestion = false;
      },
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';

  .quest {
    display: flex;
    flex-direction: column;
    padding: 32px 0px 40px 40px;
    min-height: 360px;

    @include md-block() {
      min-height: 310px;
      padding: 24px 20px 0px 20px;
      margin-bottom: 40px;
    }

    &__progress {
      margin-bottom: 40px;

      @include md-block() {
        margin-bottom: 24px;
      }
    }

    &__question {
      flex: 1 1 auto;
    }

    &__button {
    }
  }

  .progress-quest {
    display: flex;
    align-items: center;

    &__text {
      margin-right: 24px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
    }

    &__list {
      display: flex;
      align-items: center;
    }

    &__item {
    }
  }

  .item-progress-quest {
    display: flex;
    align-items: center;

    &__circle {
      width: 8px;
      height: 8px;
      background: #414141;
      border-radius: 50%;
    }

    &__line {
      flex: 1 1 auto;
      min-width: 24px;
      height: 2px;
      background: #414141;

      &__line-done {
        width: 0;
        background: green;
      }
    }
  }

  .item-progress-quest--active {
    .item-progress-quest__circle {
      background: #00a19c;
      transition: all 0.01s ease 0.19s;
    }

    .item-progress-quest__line-done {
      height: 100%;
      width: 100%;
      transition: all 0.2s ease 0s;
      background: #00a19c;
    }
  }

  .button-quest {
    .button {
      padding: 10px 5px 10px 24px;
      // .loading {
      //   width: 136px;
      // }
    }

    &__text {
      margin-right: 8px;
    }

    &__arrow {
    }
  }

  .fade-in-enter-from {
    transform: translate(50px);
    opacity: 0;
  }

  .fade-in-enter-active {
    transition: all 0.3s ease 0s;
  }
</style>

<!-- 
<VQuest
:questionObject="currentQuestionOpts"
:progressQuestPercents="progressQuestPercents"
:currentQuestionNumber="currentQuestionNumber"
:questionsCountAll="questionsCountAll"
@changePicked="updatePicked"
@toNextQuestion="nextQuestion"
/> -->
