import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The HDInsight cluster.
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
     * The ETag for the resource
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity: pulumi.Output<outputs.hdinsight.v20180601preview.ClusterIdentityResponse | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The properties of the cluster.
     */
    readonly properties: pulumi.Output<outputs.hdinsight.v20180601preview.ClusterGetPropertiesResponse>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
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
     * The name of the cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity?: pulumi.Input<inputs.hdinsight.v20180601preview.ClusterIdentity>;
    /**
     * The location of the cluster.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The cluster create parameters.
     */
    readonly properties?: pulumi.Input<inputs.hdinsight.v20180601preview.ClusterCreateProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
