import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Resource information with extended details.
 */
export declare class Vault extends pulumi.CustomResource {
    /**
     * Get an existing Vault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Vault;
    /**
     * Returns true if the given object is an instance of Vault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Vault;
    /**
     * The supported Azure location where the key vault should be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the key vault.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the vault
     */
    readonly properties: pulumi.Output<outputs.keyvault.v20161001.VaultPropertiesResponse>;
    /**
     * The tags that will be assigned to the key vault.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type of the key vault.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Vault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VaultArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Vault resource.
 */
export interface VaultArgs {
    /**
     * The supported Azure location where the key vault should be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Properties of the vault
     */
    readonly properties: pulumi.Input<inputs.keyvault.v20161001.VaultProperties>;
    /**
     * The name of the Resource Group to which the server belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the key vault.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of the vault
     */
    readonly vaultName: pulumi.Input<string>;
}
