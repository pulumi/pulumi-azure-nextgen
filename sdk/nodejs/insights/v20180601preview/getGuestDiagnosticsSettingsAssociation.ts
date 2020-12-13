// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getGuestDiagnosticsSettingsAssociation(args: GetGuestDiagnosticsSettingsAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestDiagnosticsSettingsAssociationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20180601preview:getGuestDiagnosticsSettingsAssociation", {
        "associationName": args.associationName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetGuestDiagnosticsSettingsAssociationArgs {
    /**
     * The name of the diagnostic settings association.
     */
    readonly associationName: string;
    /**
     * The fully qualified ID of the resource, including the resource name and resource type.
     */
    readonly resourceUri: string;
}

/**
 * Virtual machine guest diagnostic settings resource.
 */
export interface GetGuestDiagnosticsSettingsAssociationResult {
    /**
     * The guest diagnostic settings name.
     */
    readonly guestDiagnosticSettingsName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
