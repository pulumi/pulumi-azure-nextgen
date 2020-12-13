// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./dataController";
export * from "./getDataController";
export * from "./getPostgresInstance";
export * from "./getSqlManagedInstance";
export * from "./getSqlServer";
export * from "./getSqlServerInstance";
export * from "./getSqlServerRegistration";
export * from "./postgresInstance";
export * from "./sqlManagedInstance";
export * from "./sqlServer";
export * from "./sqlServerInstance";
export * from "./sqlServerRegistration";

// Import resources to register:
import { DataController } from "./dataController";
import { PostgresInstance } from "./postgresInstance";
import { SqlManagedInstance } from "./sqlManagedInstance";
import { SqlServer } from "./sqlServer";
import { SqlServerInstance } from "./sqlServerInstance";
import { SqlServerRegistration } from "./sqlServerRegistration";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:azuredata/v20190724preview:DataController":
                return new DataController(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20190724preview:PostgresInstance":
                return new PostgresInstance(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20190724preview:SqlManagedInstance":
                return new SqlManagedInstance(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20190724preview:SqlServer":
                return new SqlServer(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20190724preview:SqlServerInstance":
                return new SqlServerInstance(name, <any>undefined, { urn })
            case "azure-nextgen:azuredata/v20190724preview:SqlServerRegistration":
                return new SqlServerRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "azuredata/v20190724preview", _module)
