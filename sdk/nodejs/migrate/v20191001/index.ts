// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./assessment";
export * from "./getAssessment";
export * from "./getGroup";
export * from "./getHyperVCollector";
export * from "./getProject";
export * from "./getVMwareCollector";
export * from "./group";
export * from "./hyperVCollector";
export * from "./project";
export * from "./vmwareCollector";

// Export enums:
export * from "../../types/enums/migrate/v20191001";

// Import resources to register:
import { Assessment } from "./assessment";
import { Group } from "./group";
import { HyperVCollector } from "./hyperVCollector";
import { Project } from "./project";
import { VMwareCollector } from "./vmwareCollector";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:migrate/v20191001:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20191001:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20191001:HyperVCollector":
                return new HyperVCollector(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20191001:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-nextgen:migrate/v20191001:VMwareCollector":
                return new VMwareCollector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "migrate/v20191001", _module)
