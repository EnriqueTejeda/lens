/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getMessageChannelListenerInjectable } from "../../../../common/utils/channel/message-channel-listener-injection-token";
import { rootFrameHasRenderedChannel } from "../../../../common/root-frame/root-frame-rendered-channel";
import { runManyFor } from "@k8slens/run-many";
import { afterRootFrameIsReadyInjectionToken } from "../../runnable-tokens/phases";

const rootFrameRenderedChannelListenerInjectable = getMessageChannelListenerInjectable({
  id: "action",
  channel: rootFrameHasRenderedChannel,
  handler: (di) => {
    const runMany = runManyFor(di);

    return runMany(afterRootFrameIsReadyInjectionToken);
  },
});

export default rootFrameRenderedChannelListenerInjectable;
