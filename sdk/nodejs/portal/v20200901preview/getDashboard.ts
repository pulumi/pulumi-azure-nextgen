// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDashboard(args: GetDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:portal/v20200901preview:getDashboard", {
        "dashboardName": args.dashboardName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardArgs {
    /**
     * The name of the dashboard.
     */
    readonly dashboardName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * The shared dashboard resource definition.
 */
export interface GetDashboardResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The dashboard lenses.
     */
    readonly lenses?: outputs.portal.v20200901preview.DashboardLensResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The dashboard metadata.
     */
    readonly metadata?: {[key: string]: any};
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
