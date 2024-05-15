const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterHealthBarStyles() {
      return this.getHealthBarStyles(this.monsterHealth);
    },

    playerHealthBarStyles() {
      return this.getHealthBarStyles(this.playerHealth);
    },

    specialAttackIsActive() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        alert("Draw!");
      } else if (value <= 0) {
        alert("You lose!");
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        alert("Draw!");
      } else if (value <= 0) {
        alert("You win!");
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = this.getRandomValue(5, 12);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = this.getRandomValue(8, 15);
      if (this.playerHealth - attackValue < 0) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      }
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = this.getRandomValue(9, 23);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = this.getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
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
