// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./assessment";
export * from "./getAssessment";
export * from "./getGroup";
export * from "./getProject";
export * from "./group";
export * from "./project";

// Export enums:
export * from "../../types/enums/migrate/v20171111preview";

// Import resources to register:
import { Assessment } from "./assessment";
import { Group } from "./group";
import { Project } from "./project";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:migrate/v20171111preview:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20171111preview:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20171111preview:Project":
                return new Project(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "migrate/v20171111preview", _module)
