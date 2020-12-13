// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./getRegistrationAssignment";
export * from "./getRegistrationDefinition";
export * from "./registrationAssignment";
export * from "./registrationDefinition";

// Import resources to register:
import { RegistrationAssignment } from "./registrationAssignment";
import { RegistrationDefinition } from "./registrationDefinition";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:managedservices/v20190601:RegistrationAssignment":
                return new RegistrationAssignment(name, <any>undefined, { urn })
            case "azure-nextgen:managedservices/v20190601:RegistrationDefinition":
                return new RegistrationDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "managedservices/v20190601", _module)
