function debugNamespace (web3) {
  web3.extend({
    property: 'debug',
    methods: [{
      name: 'accountRangeAt',
      call: 'debug_accountRangeAt',
      params: 4
    }, {
      name: 'storageRangeAt',
      call: 'debug_storageRangeAt',
      params: 5
    }, {
      name: 'traceTransaction',
      call: 'debug_traceTransaction',
      params: 2
    }, {
      name: 'preimage',
      call: 'debug_preimage',
      params: 1
    }]
  })
}

function traceNamespace (web3) {
  web3.extend({
    property: 'trace',
    methods: [{
      name: 'call',
      call: 'trace_call',
      params: 3,
      inputFormatter: [web3.extend.formatters.inputCallFormatter, null, web3.extend.formatters.inputDefaultBlockNumberFormatter]
    }, {
      name: 'rawTransaction',
      call: 'trace_rawTransaction',
      params: 2
    }, {
      name: 'replayTransaction',
      call: 'trace_replayTransaction',
      params: 2
    }, {
      name: 'block',
      call: 'trace_block',
      params: 1,
      inpuFormatter: [web3.extend.formatters.inputDefaultBlockNumberFormatter]
    }, {
      name: 'filter',
      call: 'trace_filter',
      params: 1
    }, {
      name: 'get',
      call: 'trace_get',
      params: 2
    }, {
      name: 'transaction',
      call: 'trace_transaction',
      params: 1
    }]
  })
}

function parityNamespace (web3) {
  // From https://wiki.parity.io/JSONRPC-parity-module
  web3.extend({
    property: 'parity',
    methods: [{
      name: 'pendingTransactions',
      call: 'parity_pendingTransactions',
      params: 0,
      inputFormatter: web3.extend.formatters.outputTransactionFormatter
    }, {
      name: 'pendingTransactionsStats',
      call: 'parity_pendingTransactionsStats',
      params: 0
    }, {
      name: 'listAccounts',
      call: 'parity_listAccounts',
      params: 2
    }, {
      name: 'phraseToAddress',
      call: 'parity_phraseToAddress',
      params: 1
    }]
  }]
}

module.exports = function (web3) {
  // Geth/Aleth-debugging
  debugNamespace(web3)
  // Tracing
  traceNamespace(web3)
  // Parity-specific
  parityNamespace(web3)
}
