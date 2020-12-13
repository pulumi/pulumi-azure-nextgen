// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getJob";
export * from "./getJobCollection";
export * from "./job";
export * from "./jobCollection";

// Export enums:
export * from "../../types/enums/scheduler/v20160101";

// Import resources to register:
import { Job } from "./job";
import { JobCollection } from "./jobCollection";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:scheduler/v20160101:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-nextgen:scheduler/v20160101:JobCollection":
                return new JobCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "scheduler/v20160101", _module)
