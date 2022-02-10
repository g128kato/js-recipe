Vue.createApp({
  data() {
    return {
      nyuryokugaku: 0,
      zandaka: 0,
      logs: [],
    }
  },
  methods: {
    nyukin: function () {
      if (this.nyuryokugaku > 0) {
        this.zandaka += Number(this.nyuryokugaku)
        this.logs.push({
          date: new Date(),
          type: "入金",
          money: this.nyuryokugaku,
        })
      }
      this.nyuryokugaku = 0
    },
    syukkin: function () {
      if (this.nyuryokugaku <= this.zandaka && this.nyuryokugaku > 0) {
        this.zandaka -= Number(this.nyuryokugaku)
        this.logs.push({
          date: new Date(),
          type: "出金",
          money: this.nyuryokugaku,
        })
      }
      this.nyuryokugaku = 0
    },
  },
}).mount("#app")
