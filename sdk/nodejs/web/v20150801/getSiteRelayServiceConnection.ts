// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSiteRelayServiceConnection(args: GetSiteRelayServiceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteRelayServiceConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20150801:getSiteRelayServiceConnection", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSiteRelayServiceConnectionArgs {
    /**
     * The name by which the Hybrid Connection is identified
     */
    readonly entityName: string;
    /**
     * The name of the web app
     */
    readonly name: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}

/**
 * Class that represents a BizTalk Hybrid Connection
 */
export interface GetSiteRelayServiceConnectionResult {
    readonly biztalkUri?: string;
    readonly entityConnectionString?: string;
    readonly entityName?: string;
    readonly hostname?: string;
    /**
     * Resource Id
     */
    readonly id?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    readonly port?: number;
    readonly resourceConnectionString?: string;
    readonly resourceType?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type?: string;
}
