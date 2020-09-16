import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProximityPlacementGroup(args: GetProximityPlacementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetProximityPlacementGroupResult>;
export interface GetProximityPlacementGroupArgs {
    /**
     * The name of the proximity placement group.
     */
    readonly proximityPlacementGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Specifies information about the proximity placement group.
 */
export interface GetProximityPlacementGroupResult {
    /**
     * A list of references to all availability sets in the proximity placement group.
     */
    readonly availabilitySets: outputs.compute.v20180401.SubResourceResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
     */
    readonly proximityPlacementGroupType?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of references to all virtual machine scale sets in the proximity placement group.
     */
    readonly virtualMachineScaleSets: outputs.compute.v20180401.SubResourceResponse[];
    /**
     * A list of references to all virtual machines in the proximity placement group.
     */
    readonly virtualMachines: outputs.compute.v20180401.SubResourceResponse[];
}
