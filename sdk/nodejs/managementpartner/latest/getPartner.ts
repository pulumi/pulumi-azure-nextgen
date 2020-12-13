// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPartner(args: GetPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:managementpartner/latest:getPartner", {
        "partnerId": args.partnerId,
    }, opts);
}

export interface GetPartnerArgs {
    /**
     * Id of the Partner
     */
    readonly partnerId: string;
}

/**
 * this is the management partner operations response
 */
export interface GetPartnerResult {
    /**
     * This is the DateTime when the partner was created.
     */
    readonly createdTime?: string;
    /**
     * Type of the partner
     */
    readonly etag?: number;
    /**
     * Identifier of the partner
     */
    readonly id: string;
    /**
     * Name of the partner
     */
    readonly name: string;
    /**
     * This is the object id.
     */
    readonly objectId?: string;
    /**
     * This is the partner id
     */
    readonly partnerId?: string;
    /**
     * This is the partner name
     */
    readonly partnerName?: string;
    /**
     * This is the tenant id.
     */
    readonly tenantId?: string;
    /**
     * Type of resource. "Microsoft.ManagementPartner/partners"
     */
    readonly type: string;
    /**
     * This is the DateTime when the partner was updated.
     */
    readonly updatedTime?: string;
    /**
     * This is the version.
     */
    readonly version?: number;
}
