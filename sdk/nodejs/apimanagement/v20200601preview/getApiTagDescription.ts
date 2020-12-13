// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getApiTagDescription(args: GetApiTagDescriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetApiTagDescriptionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20200601preview:getApiTagDescription", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagDescriptionId": args.tagDescriptionId,
    }, opts);
}

export interface GetApiTagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
     */
    readonly tagDescriptionId: string;
}

/**
 * Contract details.
 */
export interface GetApiTagDescriptionResult {
    /**
     * Description of the Tag.
     */
    readonly description?: string;
    /**
     * Tag name.
     */
    readonly displayName?: string;
    /**
     * Description of the external resources describing the tag.
     */
    readonly externalDocsDescription?: string;
    /**
     * Absolute URL of external resources describing the tag.
     */
    readonly externalDocsUrl?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Identifier of the tag in the form of /tags/{tagId}
     */
    readonly tagId?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
