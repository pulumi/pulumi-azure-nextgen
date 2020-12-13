// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getHyperVCollector(args: GetHyperVCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperVCollectorResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:migrate/latest:getHyperVCollector", {
        "hyperVCollectorName": args.hyperVCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHyperVCollectorArgs {
    /**
     * Unique name of a Hyper-V collector within a project.
     */
    readonly hyperVCollectorName: string;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: string;
}

export interface GetHyperVCollectorResult {
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: outputs.migrate.latest.CollectorPropertiesResponse;
    readonly type: string;
}
