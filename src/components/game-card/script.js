export default {
  name: 'game-card',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getName(){
      return this.name.split('-')[0];
    },
    getGeneration(){
      return this.name.split('-').pop();
    }
  },
  methods: {
    onClick(){
      this.$emit('click');
    }
  }
}