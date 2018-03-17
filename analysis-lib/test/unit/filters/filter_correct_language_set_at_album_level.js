const assert = require('chai').assert

const sinon = require('sinon')
const _ = require('lodash')
const path = require('path')
const validator = require('is-my-json-valid')

const describe = require('mocha').describe
const it = require('mocha').it

const filterId = 'correctlanguagesetatalbumlevel'

const mocks = require(`../../../mocks/filters/${filterId}`)

const filter = require(`../../../src/filters/${filterId}`)
const filterMeta = require('../../../src/filters/filters-meta')[filterId]

const defaultErrorType = filterMeta['type']
const defaultExplanationId = 'default'

const ReportModule = require('../../../src/scripts/report-tool')

describe(`should test ${filterId}`, function () {
  let report = new ReportModule()
  report.init()
  report.addFilter(filterId)
  this.timeout(10000)

  it('should pass: Match The Language - English', async () => {
    const mock = mocks['validEnglish']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      assert.equal(occurrence, false)
    };
  })

  it('should pass: Match The Language - Portuguese', async () => {
    const mock = mocks['validPortuguese']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      assert.equal(occurrence, false)
    };
  })

  it('should pass: Match The Language - Spanish', async () => {
    const mock = mocks['validSpanish']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      assert.equal(occurrence, false)
    };
  })

  it('should fail: No Match The Language - English', async () => {
    const mock = mocks['invalidEnglish']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      switch (occurrence.row_id) {
        case 0:
          assert.deepEqual(occurrence.field, ['release_name'])
          assert.deepEqual(occurrence.value, ['Te quiero mucho'])
          assert.deepEqual(occurrence.explanation_id, [defaultExplanationId])
          assert.deepEqual(occurrence.error_type, [defaultErrorType])
          break
      }
    };
  })

  it('should fail: No Match The Language - Portuguese', async () => {
    const mock = mocks['invalidPortuguese']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      switch (occurrence.row_id) {
        case 0:
          assert.deepEqual(occurrence.field, ['release_name'])
          assert.deepEqual(occurrence.value, ['I Love You So Much'])
          assert.deepEqual(occurrence.explanation_id, [defaultExplanationId])
          assert.deepEqual(occurrence.error_type, [defaultErrorType])
          break
      }
    };
  })

  it('should fail: No Match The Language - Spanish', async () => {
    const mock = mocks['invalidSpanish']

    for (let idx in mock) {
      idx = parseInt(idx)
      const row = mock[idx]
      const occurrence = await filter(row, idx + 1, report)

      switch (occurrence.row_id) {
        case 0:
          assert.deepEqual(occurrence.field, ['release_name'])
          assert.deepEqual(occurrence.value, ['This is some English text'])
          assert.deepEqual(occurrence.explanation_id, [defaultExplanationId])
          assert.deepEqual(occurrence.error_type, [defaultErrorType])
          break
      }
    }
  })
})