// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./commitmentPlan";
export * from "./getCommitmentPlan";
export * from "./getWebService";
export * from "./webService";

// Export enums:
export * from "../../types/enums/machinelearning/v20160501preview";

// Import resources to register:
import { CommitmentPlan } from "./commitmentPlan";
import { WebService } from "./webService";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:machinelearning/v20160501preview:CommitmentPlan":
                return new CommitmentPlan(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearning/v20160501preview:WebService":
                return new WebService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "machinelearning/v20160501preview", _module)
