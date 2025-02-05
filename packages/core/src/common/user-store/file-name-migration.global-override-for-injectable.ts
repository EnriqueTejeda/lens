/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@k8slens/test-utils";
import userStoreFileNameMigrationInjectable from "./file-name-migration.injectable";

export default getGlobalOverride(userStoreFileNameMigrationInjectable, () => async () => {});
