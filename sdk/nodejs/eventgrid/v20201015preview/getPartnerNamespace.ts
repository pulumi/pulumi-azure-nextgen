// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPartnerNamespace(args: GetPartnerNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerNamespaceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventgrid/v20201015preview:getPartnerNamespace", {
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerNamespaceArgs {
    /**
     * Name of the partner namespace.
     */
    readonly partnerNamespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * EventGrid Partner Namespace.
 */
export interface GetPartnerNamespaceResult {
    /**
     * Endpoint for the partner namespace.
     */
    readonly endpoint: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
     */
    readonly partnerRegistrationFullyQualifiedId?: string;
    /**
     * Provisioning state of the partner namespace.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: outputs.eventgrid.v20201015preview.SystemDataResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the resource.
     */
    readonly type: string;
}
