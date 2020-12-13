// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./domain";
export * from "./domainOwnershipIdentifier";
export * from "./getDomain";
export * from "./getDomainOwnershipIdentifier";
export * from "./listDomainRecommendations";
export * from "./listTopLevelDomainAgreements";

// Export enums:
export * from "../../types/enums/domainregistration/v20200901";

// Import resources to register:
import { Domain } from "./domain";
import { DomainOwnershipIdentifier } from "./domainOwnershipIdentifier";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:domainregistration/v20200901:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-nextgen:domainregistration/v20200901:DomainOwnershipIdentifier":
                return new DomainOwnershipIdentifier(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "domainregistration/v20200901", _module)
