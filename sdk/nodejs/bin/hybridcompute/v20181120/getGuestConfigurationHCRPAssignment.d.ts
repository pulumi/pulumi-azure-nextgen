import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGuestConfigurationHCRPAssignment(args: GetGuestConfigurationHCRPAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationHCRPAssignmentResult>;
export interface GetGuestConfigurationHCRPAssignmentArgs {
    /**
     * The guest configuration assignment name.
     */
    readonly guestConfigurationAssignmentName: string;
    /**
     * The name of the ARC machine.
     */
    readonly machineName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export interface GetGuestConfigurationHCRPAssignmentResult {
    /**
     * Region where the VM is located.
     */
    readonly location?: string;
    /**
     * Name of the guest configuration assignment.
     */
    readonly name?: string;
    /**
     * Properties of the Guest configuration assignment.
     */
    readonly properties: outputs.hybridcompute.v20181120.GuestConfigurationAssignmentPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
