import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Dedicated cloud node model
 */
export declare class DedicatedCloudNode extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedCloudNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedCloudNode;
    /**
     * Returns true if the given object is an instance of DedicatedCloudNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedCloudNode;
    /**
     * Availability Zone id, e.g. "az1"
     */
    readonly availabilityZoneId: pulumi.Output<string>;
    /**
     * Availability Zone name, e.g. "Availability Zone 1"
     */
    readonly availabilityZoneName: pulumi.Output<string>;
    /**
     * VMWare Cloud Rack Name
     */
    readonly cloudRackName: pulumi.Output<string>;
    /**
     * date time the resource was created
     */
    readonly created: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * Azure region
     */
    readonly location: pulumi.Output<string>;
    /**
     * SKU's name
     */
    readonly name: pulumi.Output<string>;
    /**
     * count of nodes to create
     */
    readonly nodesCount: pulumi.Output<number>;
    /**
     * Placement Group id, e.g. "n1"
     */
    readonly placementGroupId: pulumi.Output<string>;
    /**
     * Placement Name, e.g. "Placement Group 1"
     */
    readonly placementGroupName: pulumi.Output<string>;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: pulumi.Output<string>;
    /**
     * Resource Pool Name
     */
    readonly privateCloudName: pulumi.Output<string>;
    /**
     * The provisioning status of the resource
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * purchase id
     */
    readonly purchaseId: pulumi.Output<string>;
    /**
     * Dedicated Cloud Nodes SKU
     */
    readonly sku: pulumi.Output<outputs.vmwarecloudsimple.v20190401.SkuResponse | undefined>;
    /**
     * Node status, indicates is private cloud set up on this node or not
     */
    readonly status: pulumi.Output<string>;
    /**
     * Dedicated Cloud Nodes tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: pulumi.Output<string>;
    /**
     * VMWare Cluster Name
     */
    readonly vmwareClusterName: pulumi.Output<string>;
    /**
     * Create a DedicatedCloudNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedCloudNodeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DedicatedCloudNode resource.
 */
export interface DedicatedCloudNodeArgs {
    /**
     * Availability Zone id, e.g. "az1"
     */
    readonly availabilityZoneId: pulumi.Input<string>;
    /**
     * dedicated cloud node name
     */
    readonly dedicatedCloudNodeName: pulumi.Input<string>;
    /**
     * SKU's id
     */
    readonly id: pulumi.Input<string>;
    /**
     * Azure region
     */
    readonly location: pulumi.Input<string>;
    /**
     * SKU's name
     */
    readonly name: pulumi.Input<string>;
    /**
     * count of nodes to create
     */
    readonly nodesCount: pulumi.Input<number>;
    /**
     * Placement Group id, e.g. "n1"
     */
    readonly placementGroupId: pulumi.Input<string>;
    /**
     * purchase id
     */
    readonly purchaseId: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Dedicated Cloud Nodes SKU
     */
    readonly sku?: pulumi.Input<inputs.vmwarecloudsimple.v20190401.Sku>;
    /**
     * Dedicated Cloud Nodes tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
