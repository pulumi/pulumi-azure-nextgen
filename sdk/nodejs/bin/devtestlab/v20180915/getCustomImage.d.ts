import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCustomImage(args: GetCustomImageArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomImageResult>;
export interface GetCustomImageArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=vm)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the custom image.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A custom image.
 */
export interface GetCustomImageResult {
    /**
     * The author of the custom image.
     */
    readonly author?: string;
    /**
     * The creation date of the custom image.
     */
    readonly creationDate: string;
    /**
     * Storage information about the plan related to this custom image
     */
    readonly customImagePlan?: outputs.devtestlab.v20180915.CustomImagePropertiesFromPlanResponse;
    /**
     * Storage information about the data disks present in the custom image
     */
    readonly dataDiskStorageInfo?: outputs.devtestlab.v20180915.DataDiskStorageTypeInfoResponse[];
    /**
     * The description of the custom image.
     */
    readonly description?: string;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    readonly isPlanAuthorized?: boolean;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The Managed Image Id backing the custom image.
     */
    readonly managedImageId?: string;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    readonly managedSnapshotId?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The VHD from which the image is to be created.
     */
    readonly vhd?: outputs.devtestlab.v20180915.CustomImagePropertiesCustomResponse;
    /**
     * The virtual machine from which the image is to be created.
     */
    readonly vm?: outputs.devtestlab.v20180915.CustomImagePropertiesFromVmResponse;
}
