const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterHealthBarStyles() {
      return this.getHealthBarStyles(this.monsterHealth);
    },
    playerHealthBarStyles() {
      return this.getHealthBarStyles(this.playerHealth);
    },
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= this.getRandomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= this.getRandomValue(8, 15);
    },
    getHealthBarStyles(health) {
      return {
        width: health + "%",
        backgroundColor: health > 50 ? "green" : health < 20 ? "red" : "orange",
      };
    },
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
});

app.mount("#game");
