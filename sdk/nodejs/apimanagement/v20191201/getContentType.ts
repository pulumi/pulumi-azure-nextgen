// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getContentType(args: GetContentTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetContentTypeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20191201:getContentType", {
        "contentTypeId": args.contentTypeId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetContentTypeArgs {
    /**
     * Content type identifier.
     */
    readonly contentTypeId: string;
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
 * Content type contract details.
 */
export interface GetContentTypeResult {
    /**
     * Content type description.
     */
    readonly description?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Content type schema.
     */
    readonly schema?: any;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Content type version.
     */
    readonly version?: string;
}
