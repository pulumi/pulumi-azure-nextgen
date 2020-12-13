// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getMachineLearningCompute";
export * from "./getWorkspace";
export * from "./listMachineLearningComputeKeys";
export * from "./listMachineLearningComputeNodes";
export * from "./listWorkspaceKeys";
export * from "./machineLearningCompute";
export * from "./workspace";

// Export enums:
export * from "../../types/enums/machinelearningservices/v20190501";

// Import resources to register:
import { MachineLearningCompute } from "./machineLearningCompute";
import { Workspace } from "./workspace";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:machinelearningservices/v20190501:MachineLearningCompute":
                return new MachineLearningCompute(name, <any>undefined, { urn })
            case "azure-nextgen:machinelearningservices/v20190501:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "machinelearningservices/v20190501", _module)
