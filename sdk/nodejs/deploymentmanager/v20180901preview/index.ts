// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./artifactSource";
export * from "./getArtifactSource";
export * from "./getRollout";
export * from "./getService";
export * from "./getServiceTopology";
export * from "./getServiceUnit";
export * from "./getStep";
export * from "./rollout";
export * from "./service";
export * from "./serviceTopology";
export * from "./serviceUnit";
export * from "./step";

// Export enums:
export * from "../../types/enums/deploymentmanager/v20180901preview";

// Import resources to register:
import { ArtifactSource } from "./artifactSource";
import { Rollout } from "./rollout";
import { Service } from "./service";
import { ServiceTopology } from "./serviceTopology";
import { ServiceUnit } from "./serviceUnit";
import { Step } from "./step";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:deploymentmanager/v20180901preview:ArtifactSource":
                return new ArtifactSource(name, <any>undefined, { urn })
            case "azure-nextgen:deploymentmanager/v20180901preview:Rollout":
                return new Rollout(name, <any>undefined, { urn })
            case "azure-nextgen:deploymentmanager/v20180901preview:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-nextgen:deploymentmanager/v20180901preview:ServiceTopology":
                return new ServiceTopology(name, <any>undefined, { urn })
            case "azure-nextgen:deploymentmanager/v20180901preview:ServiceUnit":
                return new ServiceUnit(name, <any>undefined, { urn })
            case "azure-nextgen:deploymentmanager/v20180901preview:Step":
                return new Step(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "deploymentmanager/v20180901preview", _module)
