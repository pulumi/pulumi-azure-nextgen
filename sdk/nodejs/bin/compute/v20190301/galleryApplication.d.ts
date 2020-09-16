import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies information about the gallery Application Definition that you want to create or update.
 */
export declare class GalleryApplication extends pulumi.CustomResource {
    /**
     * Get an existing GalleryApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryApplication;
    /**
     * Returns true if the given object is an instance of GalleryApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GalleryApplication;
    /**
     * The description of this gallery Application Definition resource. This property is updatable.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    readonly endOfLifeDate: pulumi.Output<string | undefined>;
    /**
     * The Eula agreement for the gallery Application Definition.
     */
    readonly eula: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The privacy statement uri.
     */
    readonly privacyStatementUri: pulumi.Output<string | undefined>;
    /**
     * The release note uri.
     */
    readonly releaseNoteUri: pulumi.Output<string | undefined>;
    /**
     * This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    readonly supportedOSType: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a GalleryApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryApplicationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GalleryApplication resource.
 */
export interface GalleryApplicationArgs {
    /**
     * The description of this gallery Application Definition resource. This property is updatable.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    readonly endOfLifeDate?: pulumi.Input<string>;
    /**
     * The Eula agreement for the gallery Application Definition.
     */
    readonly eula?: pulumi.Input<string>;
    /**
     * The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
     */
    readonly galleryApplicationName: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery in which the Application Definition is to be created.
     */
    readonly galleryName: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The privacy statement uri.
     */
    readonly privacyStatementUri?: pulumi.Input<string>;
    /**
     * The release note uri.
     */
    readonly releaseNoteUri?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    readonly supportedOSType: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
