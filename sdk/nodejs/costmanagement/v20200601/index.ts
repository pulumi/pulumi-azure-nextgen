// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./export";
export * from "./getExport";
export * from "./getView";
export * from "./getViewByScope";
export * from "./view";
export * from "./viewByScope";

// Export enums:
export * from "../../types/enums/costmanagement/v20200601";

// Import resources to register:
import { Export } from "./export";
import { View } from "./view";
import { ViewByScope } from "./viewByScope";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:costmanagement/v20200601:Export":
                return new Export(name, <any>undefined, { urn })
            case "azure-nextgen:costmanagement/v20200601:View":
                return new View(name, <any>undefined, { urn })
            case "azure-nextgen:costmanagement/v20200601:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "costmanagement/v20200601", _module)
