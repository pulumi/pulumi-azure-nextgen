// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getOpenShiftManagedCluster";
export * from "./openShiftManagedCluster";

// Export enums:
export * from "../../types/enums/containerservice/v20190930preview";

// Import resources to register:
import { OpenShiftManagedCluster } from "./openShiftManagedCluster";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:containerservice/v20190930preview:OpenShiftManagedCluster":
                return new OpenShiftManagedCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "containerservice/v20190930preview", _module)
