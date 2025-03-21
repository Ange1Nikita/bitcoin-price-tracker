<template>
  <div>
    <h1>График цен на биткоин</h1>
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          id: 'bitcoin-price-chart',
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  methods: {
    async fetchData() {
      const response = await this.$api.get('/prices');
      const data = response.data;

      this.series = [
        {
          name: 'Цена BTC',
          data: data.map((item) => item.price),
        },
      ];

      this.chartOptions.xaxis.categories = data.map((item) => item.date);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>