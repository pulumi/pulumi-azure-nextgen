// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getConnectionGateway(args: GetConnectionGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionGatewayResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/latest:getConnectionGateway", {
        "connectionGatewayName": args.connectionGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionGatewayArgs {
    /**
     * The connection gateway name
     */
    readonly connectionGatewayName: string;
    /**
     * The resource group
     */
    readonly resourceGroupName: string;
}

/**
 * The gateway definition
 */
export interface GetConnectionGatewayResult {
    /**
     * Resource ETag
     */
    readonly etag?: string;
    /**
     * Resource id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    readonly properties: outputs.web.latest.ConnectionGatewayDefinitionResponseProperties;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
