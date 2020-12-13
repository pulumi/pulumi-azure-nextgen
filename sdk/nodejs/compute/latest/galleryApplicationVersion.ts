// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Specifies information about the gallery Application Version that you want to create or update.
 */
export class GalleryApplicationVersion extends pulumi.CustomResource {
    /**
     * Get an existing GalleryApplicationVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryApplicationVersion {
        return new GalleryApplicationVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:compute/latest:GalleryApplicationVersion';

    /**
     * Returns true if the given object is an instance of GalleryApplicationVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryApplicationVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryApplicationVersion.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The publishing profile of a gallery image version.
     */
    public readonly publishingProfile!: pulumi.Output<outputs.compute.latest.GalleryApplicationVersionPublishingProfileResponse>;
    /**
     * This is the replication status of the gallery image version.
     */
    public /*out*/ readonly replicationStatus!: pulumi.Output<outputs.compute.latest.ReplicationStatusResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryApplicationVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryApplicationVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.galleryApplicationName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'galleryApplicationName'");
            }
            if ((!args || args.galleryApplicationVersionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'galleryApplicationVersionName'");
            }
            if ((!args || args.galleryName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.publishingProfile === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'publishingProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["galleryApplicationName"] = args ? args.galleryApplicationName : undefined;
            inputs["galleryApplicationVersionName"] = args ? args.galleryApplicationVersionName : undefined;
            inputs["galleryName"] = args ? args.galleryName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["publishingProfile"] = args ? args.publishingProfile : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["replicationStatus"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publishingProfile"] = undefined /*out*/;
            inputs["replicationStatus"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:compute/v20190301:GalleryApplicationVersion" }, { type: "azure-nextgen:compute/v20190701:GalleryApplicationVersion" }, { type: "azure-nextgen:compute/v20191201:GalleryApplicationVersion" }, { type: "azure-nextgen:compute/v20200930:GalleryApplicationVersion" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(GalleryApplicationVersion.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryApplicationVersion resource.
 */
export interface GalleryApplicationVersionArgs {
    /**
     * The name of the gallery Application Definition in which the Application Version is to be created.
     */
    readonly galleryApplicationName: pulumi.Input<string>;
    /**
     * The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     */
    readonly galleryApplicationVersionName: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    readonly galleryName: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The publishing profile of a gallery image version.
     */
    readonly publishingProfile: pulumi.Input<inputs.compute.latest.GalleryApplicationVersionPublishingProfile>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
