export default {
    computed: {
        data() {
            return this.getReportData()
        }
    },
    inject: ['getReportData'],
}
