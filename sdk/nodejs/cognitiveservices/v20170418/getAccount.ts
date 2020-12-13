// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:cognitiveservices/v20170418:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of Cognitive Services account.
     */
    readonly accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
 */
export interface GetAccountResult {
    /**
     * Entity Tag
     */
    readonly etag: string;
    /**
     * The id of the created account
     */
    readonly id: string;
    /**
     * The identity of Cognitive Services account.
     */
    readonly identity?: outputs.cognitiveservices.v20170418.IdentityResponse;
    /**
     * The Kind of the resource.
     */
    readonly kind?: string;
    /**
     * The location of the resource
     */
    readonly location?: string;
    /**
     * The name of the created account
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services account.
     */
    readonly properties: outputs.cognitiveservices.v20170418.CognitiveServicesAccountPropertiesResponse;
    /**
     * The SKU of Cognitive Services account.
     */
    readonly sku?: outputs.cognitiveservices.v20170418.SkuResponse;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
