// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./dedicatedCloudNode";
export * from "./dedicatedCloudService";
export * from "./getDedicatedCloudNode";
export * from "./getDedicatedCloudService";
export * from "./getVirtualMachine";
export * from "./virtualMachine";

// Export enums:
export * from "../../types/enums/vmwarecloudsimple/latest";

// Import resources to register:
import { DedicatedCloudNode } from "./dedicatedCloudNode";
import { DedicatedCloudService } from "./dedicatedCloudService";
import { VirtualMachine } from "./virtualMachine";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:vmwarecloudsimple/latest:DedicatedCloudNode":
                return new DedicatedCloudNode(name, <any>undefined, { urn })
            case "azure-nextgen:vmwarecloudsimple/latest:DedicatedCloudService":
                return new DedicatedCloudService(name, <any>undefined, { urn })
            case "azure-nextgen:vmwarecloudsimple/latest:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "vmwarecloudsimple/latest", _module)
