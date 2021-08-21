import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#F2B807',
        secondary: '#f3f1f0',
        accent: '#000',
      },
    },
  }
});
