// // cucumber.js
// module.exports = {
//   default: {
//     paths: ["features/**/*.feature"],
//     require: ["features/steps/**/*.ts", "features/support/**/*.ts"],
//     requireModule: ["ts-node/register"],
//     format: [
//       "progress",
//       "summary",
//       "allure-cucumberjs:reports/allure-results"
//     ],
//     publishQuiet: true,
//     parallel: 2,
//     timeout: 60000
//   }
// };


module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["features/steps/**/*.ts", "features/support/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "summary",
      "allure-cucumberjs:reports/allure-results"
    ],
    publishQuiet: true,
    parallel: 2,
    timeout: 60000,
    worldParameters: {
      baseURL: process.env.BASE_URL || "https://www.maoriplus.co.nz/"
    }
  }
};

