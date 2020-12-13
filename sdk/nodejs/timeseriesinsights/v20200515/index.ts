// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./accessPolicy";
export * from "./environment";
export * from "./eventSource";
export * from "./getAccessPolicy";
export * from "./getEnvironment";
export * from "./getEventSource";
export * from "./getReferenceDataSet";
export * from "./referenceDataSet";

// Export enums:
export * from "../../types/enums/timeseriesinsights/v20200515";

// Import resources to register:
import { AccessPolicy } from "./accessPolicy";
import { Environment } from "./environment";
import { EventSource } from "./eventSource";
import { ReferenceDataSet } from "./referenceDataSet";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:timeseriesinsights/v20200515:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:timeseriesinsights/v20200515:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "azure-nextgen:timeseriesinsights/v20200515:EventSource":
                return new EventSource(name, <any>undefined, { urn })
            case "azure-nextgen:timeseriesinsights/v20200515:ReferenceDataSet":
                return new ReferenceDataSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "timeseriesinsights/v20200515", _module)
