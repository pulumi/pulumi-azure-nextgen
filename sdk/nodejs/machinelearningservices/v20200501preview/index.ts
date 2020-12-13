// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getLinkedWorkspace";
export * from "./getMachineLearningCompute";
export * from "./getMachineLearningDataset";
export * from "./getMachineLearningDatastore";
export * from "./getMachineLearningService";
export * from "./getPrivateEndpointConnection";
export * from "./getWorkspace";
export * from "./linkedWorkspace";
export * from "./listMachineLearningComputeKeys";
export * from "./listMachineLearningComputeNodes";
export * from "./listWorkspaceKeys";
export * from "./machineLearningCompute";
export * from "./machineLearningDataset";
export * from "./machineLearningDatastore";
export * from "./machineLearningService";
export * from "./privateEndpointConnection";
export * from "./workspace";

// Export enums:
export * from "../../types/enums/machinelearningservices/v20200501preview";

// Import resources to register:
import { LinkedWorkspace } from "./linkedWorkspace";
import { MachineLearningCompute } from "./machineLearningCompute";
import { MachineLearningDataset } from "./machineLearningDataset";
import { MachineLearningDatastore } from "./machineLearningDatastore";
import { MachineLearningService } from "./machineLearningService";
import { PrivateEndpointConnection } from "./privateEndpointConnection";
import { Workspace } from "./workspace";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:machinelearningservices/v20200501preview:LinkedWorkspace":
                return new LinkedWorkspace(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:MachineLearningCompute":
                return new MachineLearningCompute(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:MachineLearningDataset":
                return new MachineLearningDataset(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:MachineLearningDatastore":
                return new MachineLearningDatastore(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:MachineLearningService":
                return new MachineLearningService(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20200501preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "machinelearningservices/v20200501preview", _module)
