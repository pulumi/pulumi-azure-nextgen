// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./consumerGroup";
export * from "./disasterRecoveryConfig";
export * from "./eventHub";
export * from "./eventHubAuthorizationRule";
export * from "./getConsumerGroup";
export * from "./getDisasterRecoveryConfig";
export * from "./getEventHub";
export * from "./getEventHubAuthorizationRule";
export * from "./getNamespace";
export * from "./getNamespaceAuthorizationRule";
export * from "./getNamespaceNetworkRuleSet";
export * from "./listDisasterRecoveryConfigKeys";
export * from "./listEventHubKeys";
export * from "./listNamespaceKeys";
export * from "./namespace";
export * from "./namespaceAuthorizationRule";
export * from "./namespaceNetworkRuleSet";

// Export enums:
export * from "../../types/enums/eventhub/latest";

// Import resources to register:
import { ConsumerGroup } from "./consumerGroup";
import { DisasterRecoveryConfig } from "./disasterRecoveryConfig";
import { EventHub } from "./eventHub";
import { EventHubAuthorizationRule } from "./eventHubAuthorizationRule";
import { Namespace } from "./namespace";
import { NamespaceAuthorizationRule } from "./namespaceAuthorizationRule";
import { NamespaceNetworkRuleSet } from "./namespaceNetworkRuleSet";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:eventhub/latest:ConsumerGroup":
                return new ConsumerGroup(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:DisasterRecoveryConfig":
                return new DisasterRecoveryConfig(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:EventHub":
                return new EventHub(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:EventHubAuthorizationRule":
                return new EventHubAuthorizationRule(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-nextgen:eventhub/latest:NamespaceNetworkRuleSet":
                return new NamespaceNetworkRuleSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "eventhub/latest", _module)
