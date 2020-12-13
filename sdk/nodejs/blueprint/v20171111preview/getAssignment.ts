// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAssignment(args: GetAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssignmentResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:blueprint/v20171111preview:getAssignment", {
        "assignmentName": args.assignmentName,
    }, opts);
}

export interface GetAssignmentArgs {
    /**
     * name of the assignment.
     */
    readonly assignmentName: string;
}

/**
 * Represents a Blueprint assignment.
 */
export interface GetAssignmentResult {
    /**
     * ID of the Blueprint definition resource.
     */
    readonly blueprintId?: string;
    /**
     * Multi-line explain this resource.
     */
    readonly description?: string;
    /**
     * One-liner string explain this resource.
     */
    readonly displayName?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Managed Service Identity for this Blueprint assignment
     */
    readonly identity: outputs.blueprint.v20171111preview.ManagedServiceIdentityResponse;
    /**
     * The location of this Blueprint assignment.
     */
    readonly location: string;
    /**
     * Defines how Blueprint-managed resources will be locked.
     */
    readonly locks?: outputs.blueprint.v20171111preview.AssignmentLockSettingsResponse;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Blueprint parameter values.
     */
    readonly parameters: {[key: string]: outputs.blueprint.v20171111preview.ParameterValueBaseResponse};
    /**
     * State of the assignment.
     */
    readonly provisioningState: string;
    /**
     * Names and locations of resource group placeholders.
     */
    readonly resourceGroups: {[key: string]: outputs.blueprint.v20171111preview.ResourceGroupValueResponse};
    /**
     * Status of Blueprint assignment. This field is readonly.
     */
    readonly status: outputs.blueprint.v20171111preview.AssignmentStatusResponse;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
