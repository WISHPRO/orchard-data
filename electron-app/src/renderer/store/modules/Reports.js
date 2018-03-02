import axios from 'axios'
import {
    ACTIVE_REPORT_CATEGORY,
    ROW_BY_ROW_REPORT,
    FIELD_BY_FIELD_REPORT,
    ERROR_BY_ERROR_REPORT,
    SET_ROW_BY_ROW_DATA,
    SET_FIELD_BY_FIELD_DATA,
    SET_ERROR_BY_ERROR_DATA
} from '@/constants/types'
import {
    ITUNES_CATEGORY,
    OVERALL_CATEGORY
} from '@/constants/report-category'
import {
    API_URL
} from '@/constants/config'

const categoryMap = {
    [ITUNES_CATEGORY]: 'itunes',
    [OVERALL_CATEGORY]: 'risk'
}

export default {
    state: {
        [ROW_BY_ROW_REPORT]: [],
        [FIELD_BY_FIELD_REPORT]: [],
        [ERROR_BY_ERROR_REPORT]: []
    },
    mutations: {
        [SET_ROW_BY_ROW_DATA] (state, reportData) {
            state[ROW_BY_ROW_REPORT] = reportData
        },
        [SET_FIELD_BY_FIELD_DATA] (state, reportData) {
            state[FIELD_BY_FIELD_REPORT] = reportData
        },
        [SET_ERROR_BY_ERROR_DATA] (state, reportData) {
            state[ERROR_BY_ERROR_REPORT] = reportData
        },
    },
    actions: {
        /**
         * Fetch RowByRow report data
         *
         * @param commit
         * @param rootState
         * @param {Number | String} batchId Batch ID
         * @param {String} category The category for which you want the report (optional)
         * @returns {Promise<void>}
         */
        async fetchRowByRowReport ({commit, rootState}, {batchId, category}) {
            const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
            const activeCategory = category || reportCategory

            const reportData = (await axios.get(`${API_URL}row-by-row/${categoryMap[activeCategory]}/${batchId}`)).data

            commit(SET_ROW_BY_ROW_DATA, reportData)
        },

        async fetchFieldByFieldReport ({commit, rootState}, {batchId, category}) {
            const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
            const activeCategory = category || reportCategory

            const reportData = (await axios.get(`${API_URL}field-by-field/${categoryMap[activeCategory]}/${batchId}`)).data

            commit(SET_FIELD_BY_FIELD_DATA, reportData)
        },

        async fetchErrorByErrorReport ({commit, rootState}, {batchId, category}) {
            const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
            const activeCategory = category || reportCategory

            const reportData = (await axios.get(`${API_URL}error-by-error/${categoryMap[activeCategory]}/${batchId}`)).data

            commit(SET_ERROR_BY_ERROR_DATA, reportData)
        }
    }
}