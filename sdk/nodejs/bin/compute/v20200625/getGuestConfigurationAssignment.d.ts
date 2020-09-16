import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGuestConfigurationAssignment(args: GetGuestConfigurationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationAssignmentResult>;
export interface GetGuestConfigurationAssignmentArgs {
    /**
     * The guest configuration assignment name.
     */
    readonly guestConfigurationAssignmentName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    readonly vmName: string;
}
/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export interface GetGuestConfigurationAssignmentResult {
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
    readonly properties: outputs.compute.v20200625.GuestConfigurationAssignmentPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
