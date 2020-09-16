import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult>;
export interface GetImageArgs {
    /**
     * The expand expression to apply on the operation.
     */
    readonly expand?: string;
    /**
     * The name of the image.
     */
    readonly imageName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
 */
export interface GetImageResult {
    /**
     * Gets the HyperVGenerationType of the VirtualMachine created from the image
     */
    readonly hyperVGeneration?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The source virtual machine from which Image is created.
     */
    readonly sourceVirtualMachine?: outputs.compute.v20190701.SubResourceResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    readonly storageProfile?: outputs.compute.v20190701.ImageStorageProfileResponse;
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
}
