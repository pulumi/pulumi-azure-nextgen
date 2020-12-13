// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./application";
export * from "./applicationType";
export * from "./applicationTypeVersion";
export * from "./cluster";
export * from "./getApplication";
export * from "./getApplicationType";
export * from "./getApplicationTypeVersion";
export * from "./getCluster";
export * from "./getService";
export * from "./service";

// Export enums:
export * from "../../types/enums/servicefabric/v20170701preview";

// Import resources to register:
import { Application } from "./application";
import { ApplicationType } from "./applicationType";
import { ApplicationTypeVersion } from "./applicationTypeVersion";
import { Cluster } from "./cluster";
import { Service } from "./service";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:servicefabric/v20170701preview:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-nextgen:servicefabric/v20170701preview:ApplicationType":
                return new ApplicationType(name, <any>undefined, { urn })
            case "azure-nextgen:servicefabric/v20170701preview:ApplicationTypeVersion":
                return new ApplicationTypeVersion(name, <any>undefined, { urn })
            case "azure-nextgen:servicefabric/v20170701preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-nextgen:servicefabric/v20170701preview:Service":
                return new Service(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "servicefabric/v20170701preview", _module)
