import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Properties of the blob container, including Id, resource name, resource type, Etag.
 */
export declare class BlobContainer extends pulumi.CustomResource {
    /**
     * Get an existing BlobContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobContainer;
    /**
     * Returns true if the given object is an instance of BlobContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BlobContainer;
    /**
     * Default the container to use specified encryption scope for all writes.
     */
    readonly defaultEncryptionScope: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the blob container was deleted.
     */
    readonly deleted: pulumi.Output<boolean>;
    /**
     * Blob container deletion time.
     */
    readonly deletedTime: pulumi.Output<string>;
    /**
     * Block override of encryption scope from the container default.
     */
    readonly denyEncryptionScopeOverride: pulumi.Output<boolean | undefined>;
    /**
     * Resource Etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
     */
    readonly hasImmutabilityPolicy: pulumi.Output<boolean>;
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     */
    readonly hasLegalHold: pulumi.Output<boolean>;
    /**
     * The ImmutabilityPolicy property of the container.
     */
    readonly immutabilityPolicy: pulumi.Output<outputs.storage.v20190601.ImmutabilityPolicyPropertiesResponse>;
    /**
     * Returns the date and time the container was last modified.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
     */
    readonly leaseDuration: pulumi.Output<string>;
    /**
     * Lease state of the container.
     */
    readonly leaseState: pulumi.Output<string>;
    /**
     * The lease status of the container.
     */
    readonly leaseStatus: pulumi.Output<string>;
    /**
     * The LegalHold property of the container.
     */
    readonly legalHold: pulumi.Output<outputs.storage.v20190601.LegalHoldPropertiesResponse>;
    /**
     * A name-value pair to associate with the container as metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies whether data in the container may be accessed publicly and the level of access.
     */
    readonly publicAccess: pulumi.Output<string | undefined>;
    /**
     * Remaining retention days for soft deleted blob container.
     */
    readonly remainingRetentionDays: pulumi.Output<number>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The version of the deleted blob container.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a BlobContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobContainerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BlobContainer resource.
 */
export interface BlobContainerArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Default the container to use specified encryption scope for all writes.
     */
    readonly defaultEncryptionScope?: pulumi.Input<string>;
    /**
     * Block override of encryption scope from the container default.
     */
    readonly denyEncryptionScopeOverride?: pulumi.Input<boolean>;
    /**
     * A name-value pair to associate with the container as metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies whether data in the container may be accessed publicly and the level of access.
     */
    readonly publicAccess?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
