import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The top level Log Analytics cluster resource container.
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * The ID associated with the cluster.
     */
    readonly clusterId: pulumi.Output<string>;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.operationalinsights.v20200801.IdentityResponse | undefined>;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties: pulumi.Output<outputs.operationalinsights.v20200801.KeyVaultPropertiesResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The link used to get the next page of recommendations.
     */
    readonly nextLink: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The sku properties.
     */
    readonly sku: pulumi.Output<outputs.operationalinsights.v20200801.ClusterSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The name of the Log Analytics cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.operationalinsights.v20200801.Identity>;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties?: pulumi.Input<inputs.operationalinsights.v20200801.KeyVaultProperties>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The link used to get the next page of recommendations.
     */
    readonly nextLink?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku properties.
     */
    readonly sku?: pulumi.Input<inputs.operationalinsights.v20200801.ClusterSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
