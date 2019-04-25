module.exports = {
compilers: {
    solc: {
      version: "0.4.24",
    },
  },
  networks: {
        develop: {
          host: "localhost",
          port: 8545,
          network_id: "*" // Match any network id
        }
      }

  
};