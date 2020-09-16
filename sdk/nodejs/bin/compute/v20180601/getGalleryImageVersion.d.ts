import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGalleryImageVersion(args: GetGalleryImageVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageVersionResult>;
export interface GetGalleryImageVersionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    readonly expand?: string;
    /**
     * The name of the gallery Image Definition in which the Image Version resides.
     */
    readonly galleryImageName: string;
    /**
     * The name of the gallery Image Version to be retrieved.
     */
    readonly galleryImageVersionName: string;
    /**
     * The name of the Shared Image Gallery in which the Image Definition resides.
     */
    readonly galleryName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Specifies information about the gallery Image Version that you want to create or update.
 */
export interface GetGalleryImageVersionResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The publishing profile of a gallery Image Version.
     */
    readonly publishingProfile: outputs.compute.v20180601.GalleryImageVersionPublishingProfileResponse;
    /**
     * This is the replication status of the gallery Image Version.
     */
    readonly replicationStatus: outputs.compute.v20180601.ReplicationStatusResponse;
    /**
     * This is the storage profile of a gallery Image Version.
     */
    readonly storageProfile: outputs.compute.v20180601.GalleryImageVersionStorageProfileResponse;
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
