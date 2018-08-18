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
    }]
  })
}

module.exports = function (web3) {
  // Geth/Aleth-debugging
  debugNamespace(web3)
}
