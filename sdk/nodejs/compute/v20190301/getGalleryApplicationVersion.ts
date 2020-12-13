// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getGalleryApplicationVersion(args: GetGalleryApplicationVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryApplicationVersionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:compute/v20190301:getGalleryApplicationVersion", {
        "expand": args.expand,
        "galleryApplicationName": args.galleryApplicationName,
        "galleryApplicationVersionName": args.galleryApplicationVersionName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryApplicationVersionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    readonly expand?: string;
    /**
     * The name of the gallery Application Definition in which the Application Version resides.
     */
    readonly galleryApplicationName: string;
    /**
     * The name of the gallery Application Version to be retrieved.
     */
    readonly galleryApplicationVersionName: string;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    readonly galleryName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Specifies information about the gallery Application Version that you want to create or update.
 */
export interface GetGalleryApplicationVersionResult {
    /**
     * Resource Id
     */
    readonly id: string;
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
    readonly publishingProfile: outputs.compute.v20190301.GalleryApplicationVersionPublishingProfileResponse;
    /**
     * This is the replication status of the gallery Image Version.
     */
    readonly replicationStatus: outputs.compute.v20190301.ReplicationStatusResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
