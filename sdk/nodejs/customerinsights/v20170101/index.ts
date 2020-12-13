// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./connector";
export * from "./connectorMapping";
export * from "./getConnector";
export * from "./getConnectorMapping";
export * from "./getHub";
export * from "./getImageUploadUrlForData";
export * from "./getImageUploadUrlForEntityType";
export * from "./getKpi";
export * from "./getLink";
export * from "./getProfile";
export * from "./getRelationship";
export * from "./getRelationshipLink";
export * from "./getRoleAssignment";
export * from "./getView";
export * from "./hub";
export * from "./kpi";
export * from "./link";
export * from "./profile";
export * from "./relationship";
export * from "./relationshipLink";
export * from "./roleAssignment";
export * from "./view";

// Export enums:
export * from "../../types/enums/customerinsights/v20170101";

// Import resources to register:
import { Connector } from "./connector";
import { ConnectorMapping } from "./connectorMapping";
import { Hub } from "./hub";
import { Kpi } from "./kpi";
import { Link } from "./link";
import { Profile } from "./profile";
import { Relationship } from "./relationship";
import { RelationshipLink } from "./relationshipLink";
import { RoleAssignment } from "./roleAssignment";
import { View } from "./view";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:customerinsights/v20170101:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:ConnectorMapping":
                return new ConnectorMapping(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:Hub":
                return new Hub(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:Kpi":
                return new Kpi(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:Link":
                return new Link(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:Relationship":
                return new Relationship(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:RelationshipLink":
                return new RelationshipLink(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:RoleAssignment":
                return new RoleAssignment(name, <any>undefined, { urn })
            case "azure-nextgen:customerinsights/v20170101:View":
                return new View(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "customerinsights/v20170101", _module)
