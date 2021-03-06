import axios from 'axios'
import {
  ACTIVE_REPORT_CATEGORY,
  ROW_BY_ROW_REPORT,
  FIELD_BY_FIELD_REPORT,
  ERROR_BY_ERROR_REPORT,
  SET_ROW_BY_ROW_DATA,
  SET_FIELD_BY_FIELD_DATA,
  SET_ERROR_BY_ERROR_DATA,
  ERROR_BY_ERROR_REPORT_FAILURE,
  SET_REPORT_SUMMARY_DATA,
  REPORT_SUMMARY
} from '@/constants/types'
import {
  API_URL,
  CATEGORIES
} from '@/constants/config'

const categoryMap = CATEGORIES

export default {
  getters: {
    errorByErrorDownloadLink (state, getters, rootState) {
      return function (batchId) {
        return `${API_URL}error-by-error/${categoryMap[rootState.ACTIVE_REPORT_CATEGORY]}/${batchId}.tsv`
      }
    },

    rowByRowDownloadLink (state, getters, rootState) {
      return function (batchId) {
        return `${API_URL}row-by-row/${categoryMap[rootState.ACTIVE_REPORT_CATEGORY]}/${batchId}.tsv`
      }
    },

    fieldByFieldDownloadLink (state, getters, rootState) {
      return function (batchId) {
        return `${API_URL}field-by-field/${categoryMap[rootState.ACTIVE_REPORT_CATEGORY]}/${batchId}.tsv`
      }
    },
    summaryDownloadLink () {
      return function (batchId) {
        return `${API_URL}dataset/${batchId}.tsv`
      }
    },

    [ERROR_BY_ERROR_REPORT_FAILURE]: (state) => state[ERROR_BY_ERROR_REPORT_FAILURE]
  },
  state: {
    [ROW_BY_ROW_REPORT]: [],
    [FIELD_BY_FIELD_REPORT]: [],
    [ERROR_BY_ERROR_REPORT]: [],
    [ERROR_BY_ERROR_REPORT_FAILURE]: null,
    [REPORT_SUMMARY]: {}
  },
  mutations: {
    [SET_REPORT_SUMMARY_DATA] (state, reportData) {
      state[REPORT_SUMMARY] = reportData
    },
    [SET_ROW_BY_ROW_DATA] (state, reportData) {
      state[ROW_BY_ROW_REPORT] = reportData
    },
    [SET_FIELD_BY_FIELD_DATA] (state, reportData) {
      state[FIELD_BY_FIELD_REPORT] = reportData
    },
    [SET_ERROR_BY_ERROR_DATA] (state, reportData) {
      state[ERROR_BY_ERROR_REPORT] = reportData
    },
    [ERROR_BY_ERROR_REPORT_FAILURE] (state, error) {
      return Object.assign(state, { [ERROR_BY_ERROR_REPORT_FAILURE]: error })
    }
  },
  actions: {
    async fetchSummary ({ commit }, { batchId }) {
      const reportData = (await axios.get(`${API_URL}report-summary/${batchId}`)).data
      commit(SET_REPORT_SUMMARY_DATA, reportData)
    },

    /**
     * Fetch RowByRow report data
     *
     * @param commit
     * @param rootState
     * @param {Number | String} batchId Batch ID
     * @param {String} category The category for which you want the report (optional)
     * @returns {Promise<void>}
     */
    async fetchRowByRowReport ({ commit, rootState }, { batchId, category }) {
      const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
      const activeCategory = category || reportCategory

      const reportData = (await axios.get(`${API_URL}row-by-row/${categoryMap[activeCategory]}/${batchId}`)).data

      commit(SET_ROW_BY_ROW_DATA, reportData)
    },

    async fetchFieldByFieldReport ({ commit, rootState }, { batchId, category }) {
      const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
      const activeCategory = category || reportCategory

      const reportData = (await axios.get(`${API_URL}field-by-field/${categoryMap[activeCategory]}/${batchId}`)).data

      commit(SET_FIELD_BY_FIELD_DATA, reportData)
    },

    async fetchErrorByErrorReport ({ commit, rootState }, { batchId, category }) {
      const reportCategory = rootState[ACTIVE_REPORT_CATEGORY]
      const activeCategory = category || reportCategory

      const reportData = (await axios.get(`${API_URL}error-by-error/${categoryMap[activeCategory]}/${batchId}`)).data

      commit(SET_ERROR_BY_ERROR_DATA, reportData)
    }
  }
}
