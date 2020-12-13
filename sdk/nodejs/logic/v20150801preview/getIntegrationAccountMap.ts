// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getIntegrationAccountMap(args: GetIntegrationAccountMapArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountMapResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/v20150801preview:getIntegrationAccountMap", {
        "integrationAccountName": args.integrationAccountName,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountMapArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The integration account map name.
     */
    readonly mapName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}

export interface GetIntegrationAccountMapResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The content.
     */
    readonly content?: any;
    /**
     * The content link.
     */
    readonly contentLink: outputs.logic.v20150801preview.IntegrationAccountContentLinkResponse;
    /**
     * The content type.
     */
    readonly contentType?: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource id.
     */
    readonly id?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The map type.
     */
    readonly mapType?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * The resource name.
     */
    readonly name?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type?: string;
}
