// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getProductPolicy(args: GetProductPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetProductPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20191201:getProductPolicy", {
        "format": args.format,
        "policyId": args.policyId,
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductPolicyArgs {
    /**
     * Policy Export Format.
     */
    readonly format?: string;
    /**
     * The identifier of the Policy.
     */
    readonly policyId: string;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    readonly productId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}

/**
 * Policy Contract details.
 */
export interface GetProductPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly format?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Contents of the Policy as defined by the format.
     */
    readonly value: string;
}
