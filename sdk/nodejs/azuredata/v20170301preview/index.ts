// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getSqlServer";
export * from "./getSqlServerRegistration";
export * from "./sqlServer";
export * from "./sqlServerRegistration";

// Import resources to register:
import { SqlServer } from "./sqlServer";
import { SqlServerRegistration } from "./sqlServerRegistration";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:azuredata/v20170301preview:SqlServer":
                return new SqlServer(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20170301preview:SqlServerRegistration":
                return new SqlServerRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "azuredata/v20170301preview", _module)
