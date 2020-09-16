import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Represents an image from the Azure Marketplace
 */
export declare class GalleryImage extends pulumi.CustomResource {
    /**
     * Get an existing GalleryImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryImage;
    /**
     * Returns true if the given object is an instance of GalleryImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GalleryImage;
    /**
     * The author of the gallery image.
     */
    readonly author: pulumi.Output<string>;
    /**
     * The creation date of the gallery image.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * The description of the gallery image.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The icon of the gallery image.
     */
    readonly icon: pulumi.Output<string>;
    /**
     * The image reference of the gallery image.
     */
    readonly imageReference: pulumi.Output<outputs.labservices.v20181015.GalleryImageReferenceResponse>;
    /**
     * Indicates whether this gallery image is enabled.
     */
    readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether this gallery has been overridden for this lab account
     */
    readonly isOverride: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the plan has been authorized for programmatic deployment.
     */
    readonly isPlanAuthorized: pulumi.Output<boolean | undefined>;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: pulumi.Output<outputs.labservices.v20181015.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The third party plan that applies to this image
     */
    readonly planId: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string | undefined>;
    /**
     * Create a GalleryImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryImageArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GalleryImage resource.
 */
export interface GalleryImageArgs {
    /**
     * The name of the gallery Image.
     */
    readonly galleryImageName: pulumi.Input<string>;
    /**
     * Indicates whether this gallery image is enabled.
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether this gallery has been overridden for this lab account
     */
    readonly isOverride?: pulumi.Input<boolean>;
    /**
     * Indicates if the plan has been authorized for programmatic deployment.
     */
    readonly isPlanAuthorized?: pulumi.Input<boolean>;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
}
