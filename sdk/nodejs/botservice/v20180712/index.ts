// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./bot";
export * from "./botConnection";
export * from "./channel";
export * from "./enterpriseChannel";
export * from "./getBot";
export * from "./getBotConnection";
export * from "./getChannel";
export * from "./getEnterpriseChannel";
export * from "./listBotConnectionServiceProviders";
export * from "./listBotConnectionWithSecrets";
export * from "./listChannelWithKeys";

// Export enums:
export * from "../../types/enums/botservice/v20180712";

// Import resources to register:
import { Bot } from "./bot";
import { BotConnection } from "./botConnection";
import { Channel } from "./channel";
import { EnterpriseChannel } from "./enterpriseChannel";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:botservice/v20180712:Bot":
                return new Bot(name, <any>undefined, { urn })
            case "azure-nextgen:botservice/v20180712:BotConnection":
                return new BotConnection(name, <any>undefined, { urn })
            case "azure-nextgen:botservice/v20180712:Channel":
                return new Channel(name, <any>undefined, { urn })
            case "azure-nextgen:botservice/v20180712:EnterpriseChannel":
                return new EnterpriseChannel(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "botservice/v20180712", _module)
