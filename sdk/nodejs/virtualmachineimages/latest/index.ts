// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getVirtualMachineImageTemplate";
export * from "./virtualMachineImageTemplate";

// Export enums:
export * from "../../types/enums/virtualmachineimages/latest";

// Import resources to register:
import { VirtualMachineImageTemplate } from "./virtualMachineImageTemplate";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:virtualmachineimages/latest:VirtualMachineImageTemplate":
                return new VirtualMachineImageTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "virtualmachineimages/latest", _module)
