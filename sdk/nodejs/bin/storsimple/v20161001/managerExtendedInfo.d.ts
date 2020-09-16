import * as pulumi from "@pulumi/pulumi";
/**
 * The extended info of the manager.
 */
export declare class ManagerExtendedInfo extends pulumi.CustomResource {
    /**
     * Get an existing ManagerExtendedInfo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagerExtendedInfo;
    /**
     * Returns true if the given object is an instance of ManagerExtendedInfo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagerExtendedInfo;
    /**
     * Represents the encryption algorithm used to encrypt the other keys. None - if EncryptionKey is saved in plain text format. AlgorithmName - if encryption is used
     */
    readonly algorithm: pulumi.Output<string>;
    /**
     * Represents the CEK of the resource
     */
    readonly encryptionKey: pulumi.Output<string | undefined>;
    /**
     * Represents the Cert thumbprint that was used to encrypt the CEK
     */
    readonly encryptionKeyThumbprint: pulumi.Output<string | undefined>;
    /**
     * ETag of the Resource
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Represents the CIK of the resource
     */
    readonly integrityKey: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
     */
    readonly portalCertificateThumbprint: pulumi.Output<string | undefined>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Represents the version of the ExtendedInfo object being persisted
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a ManagerExtendedInfo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagerExtendedInfoArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ManagerExtendedInfo resource.
 */
export interface ManagerExtendedInfoArgs {
    /**
     * Represents the encryption algorithm used to encrypt the other keys. None - if EncryptionKey is saved in plain text format. AlgorithmName - if encryption is used
     */
    readonly algorithm: pulumi.Input<string>;
    /**
     * Represents the CEK of the resource
     */
    readonly encryptionKey?: pulumi.Input<string>;
    /**
     * Represents the Cert thumbprint that was used to encrypt the CEK
     */
    readonly encryptionKeyThumbprint?: pulumi.Input<string>;
    /**
     * ETag of the Resource
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Represents the CIK of the resource
     */
    readonly integrityKey: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
     */
    readonly portalCertificateThumbprint?: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Represents the version of the ExtendedInfo object being persisted
     */
    readonly version?: pulumi.Input<string>;
}
