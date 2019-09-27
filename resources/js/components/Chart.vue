<template>
    <canvas ref="myChart" width="500" height="300"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'Chart',
        props: {
            // The chart's data.labels
            labels: Array,

            // The chart's data.datasets
            datasets: {
                type: Array,
                required: true
            },

            // The chart's options.
            options: Object
        },
        mounted() {
            new Chart(this.$refs.myChart, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: this.datasets
                },
                options: this.options
            });
        }
    }
</script>
