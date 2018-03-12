import { mount } from 'avoriaz'
import Vuex from 'vuex'
import sinon from 'sinon'
import ReportSummary from '@/components/pages/ReportHome'

import {
  SUBMISSION,
  SET_ACTIVE_CATEGORY
  /* Stubbing to pass lint, will work on it later
  SUBMISSIONS_REQUEST,
  SUBMISSIONS_FAILURE
  */
} from '@/constants/types'
import router from '../../../src/renderer/router'

describe('ReportSummary.vue', () => {
  let wrapper
  let getters
  let mutations
  let store
  let actions
  const item = {
    rowid: 1,
    source: '/dir/1-spanish.tsv',
    artist_blacklist: 'Test',
    keyword_blacklist: 'test',
    duplicates_threshold: 1,
    various_artists_threshold: 1,
    lang: 'en-ES',
    status: 1,
    time: 1518462941917
  }

  beforeEach(() => {
    getters = {
      error: () => ({}),
      loading: () => false,
      item: () => item,
      [`${SUBMISSION}`]: () => item
    }

    mutations = {
      [SET_ACTIVE_CATEGORY]: () => { }
    }

    actions = {
      fetchDataset: sinon.stub()
    }

    store = new Vuex.Store({
      getters,
      actions,
      mutations
    })

    wrapper = mount(ReportSummary, {
      router,
      store
    })
  })

  it('should render correct function', () => {
    expect(typeof wrapper.vm.showOverallRistk).to.equal('function')
    expect(typeof wrapper.vm.showAppleTab).to.equal('function')
    expect(typeof wrapper.vm.showCustom).to.equal('function')
  })

  it('should set flags when calling overallRiskFlag method', () => {
    wrapper.vm.showOverallRistk()
    wrapper.update()
    expect(wrapper.vm.overallRiskFlag).to.equal(true)
    expect(wrapper.vm.appleTabFlag).to.equal(false)
    expect(wrapper.vm.customFlag).to.equal(false)
  })

  it('should set flags when calling showAppleTab method', () => {
    wrapper.vm.showAppleTab()
    wrapper.update()
    expect(wrapper.vm.overallRiskFlag).to.equal(false)
    expect(wrapper.vm.appleTabFlag).to.equal(true)
    expect(wrapper.vm.customFlag).to.equal(false)
  })

  it('should set flags when calling showCustom method', () => {
    wrapper.vm.showCustom()
    wrapper.update()
    expect(wrapper.vm.overallRiskFlag).to.equal(false)
    expect(wrapper.vm.appleTabFlag).to.equal(false)
    expect(wrapper.vm.customFlag).to.equal(true)
  })

  it('should render apple tab data from getters', () => {
    const tabButton = wrapper.contains('.report__tabs.report__tabs--left .apple-tab.is-active')
    const tab = wrapper.contains('.report-container.apple-tab.is-active')

    expect(tabButton).to.equal(true)
    expect(tab).to.equal(true)
  })

  it('should render custom tab data from getters', () => {
    // Switch tab and check data
    wrapper.vm.showCustom()
    wrapper.update()

    const fileName = wrapper.find('.report-container.custom-tab .report__view-link span')[0]
    const tabButton = wrapper.contains('.report__tabs.report__tabs--left .custom-tab.is-active')
    const tab = wrapper.contains('.report-container.custom-tab.is-active')

    expect(fileName.text().trim()).to.equal(item.source.split('/')[2])
    expect(tabButton).to.equal(true)
    expect(tab).to.equal(true)
  })

  it('should have proper text for tabs', () => {
    const overall = wrapper.find('.report__tab.overall-tab ')[0]
    const itunes = wrapper.find('.report__tab.apple-tab ')[0]
    const custom = wrapper.find('.report__tab.custom-tab ')[0]

    expect(overall.text().trim()).to.equal('Overall Risk Assessment')
    expect(itunes.text().trim()).to.equal('Apple & Itunes Guidelines')
    expect(custom.text().trim()).to.equal('Custom Parameters')
  })

  // TODO: Write test for the following cases:
  //       * Failure on upload
  //       * Malformed data in uploaded file
  //       * Invalid file extension (if applies, maybe this is a e2e one instead)
})