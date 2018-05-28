/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as autotune from "autotune";

exports.onClientEntry = async () => {
    await autotune.initialize("2e7c3598-62c0-4e90-9d5f-48921bd4ee82");
};