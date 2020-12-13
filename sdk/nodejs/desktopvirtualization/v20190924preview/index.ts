// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./application";
export * from "./applicationGroup";
export * from "./getApplication";
export * from "./getApplicationGroup";
export * from "./getHostPool";
export * from "./getWorkspace";
export * from "./hostPool";
export * from "./workspace";

// Export enums:
export * from "../../types/enums/desktopvirtualization/v20190924preview";

// Import resources to register:
import { Application } from "./application";
import { ApplicationGroup } from "./applicationGroup";
import { HostPool } from "./hostPool";
import { Workspace } from "./workspace";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:desktopvirtualization/v20190924preview:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-nextgen:desktopvirtualization/v20190924preview:ApplicationGroup":
                return new ApplicationGroup(name, <any>undefined, { urn })
            case "azure-nextgen:desktopvirtualization/v20190924preview:HostPool":
                return new HostPool(name, <any>undefined, { urn })
            case "azure-nextgen:desktopvirtualization/v20190924preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "desktopvirtualization/v20190924preview", _module)
