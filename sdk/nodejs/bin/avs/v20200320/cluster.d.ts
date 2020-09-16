import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A cluster resource
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
     * The identity
     */
    readonly clusterId: pulumi.Output<number>;
    /**
     * The cluster size
     */
    readonly clusterSize: pulumi.Output<number>;
    /**
     * The hosts
     */
    readonly hosts: pulumi.Output<string[]>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The cluster SKU
     */
    readonly sku: pulumi.Output<outputs.avs.v20200320.SkuResponse>;
    /**
     * Resource type.
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
     * Name of the cluster in the private cloud
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The cluster size
     */
    readonly clusterSize: pulumi.Input<number>;
    /**
     * The name of the private cloud.
     */
    readonly privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The cluster SKU
     */
    readonly sku: pulumi.Input<inputs.avs.v20200320.Sku>;
}
