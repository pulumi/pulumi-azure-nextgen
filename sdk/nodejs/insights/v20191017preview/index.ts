// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getPrivateEndpointConnection";
export * from "./getPrivateLinkScope";
export * from "./getPrivateLinkScopedResource";
export * from "./getWorkbookTemplate";
export * from "./privateEndpointConnection";
export * from "./privateLinkScope";
export * from "./privateLinkScopedResource";
export * from "./workbookTemplate";

// Import resources to register:
import { PrivateEndpointConnection } from "./privateEndpointConnection";
import { PrivateLinkScope } from "./privateLinkScope";
import { PrivateLinkScopedResource } from "./privateLinkScopedResource";
import { WorkbookTemplate } from "./workbookTemplate";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:insights/v20191017preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:insights/v20191017preview:PrivateLinkScope":
                return new PrivateLinkScope(name, <any>undefined, { urn })
            case "azure-nextgen:insights/v20191017preview:PrivateLinkScopedResource":
                return new PrivateLinkScopedResource(name, <any>undefined, { urn })
            case "azure-nextgen:insights/v20191017preview:WorkbookTemplate":
                return new WorkbookTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "insights/v20191017preview", _module)
