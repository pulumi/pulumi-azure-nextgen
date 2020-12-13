// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWebAppPublicCertificateSlot(args: GetWebAppPublicCertificateSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPublicCertificateSlotResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20200601:getWebAppPublicCertificateSlot", {
        "name": args.name,
        "publicCertificateName": args.publicCertificateName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPublicCertificateSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Public certificate name.
     */
    readonly publicCertificateName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    readonly slot: string;
}

/**
 * Public certificate object
 */
export interface GetWebAppPublicCertificateSlotResult {
    /**
     * Public Certificate byte array
     */
    readonly blob?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: string;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
