const getRandomValue = (min, max) => {
  return (attackValue = Math.floor(Math.random() * (max - min) + min));
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.monsterHealth -= getRandomValue(8, 15);
    },
  },
});

app.mount("#game");
