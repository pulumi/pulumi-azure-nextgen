import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of a Namespace resource.
 */
export declare class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Namespace;
    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Namespace;
    /**
     * The time the namespace was created.
     */
    readonly createdAt: pulumi.Output<string | undefined>;
    /**
     * Whether or not the namespace is set as Critical.
     */
    readonly critical: pulumi.Output<boolean | undefined>;
    /**
     * Data center for the namespace
     */
    readonly dataCenter: pulumi.Output<string | undefined>;
    /**
     * Whether or not the namespace is currently enabled.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Identifier for Azure Insights metrics
     */
    readonly metricId: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The namespace type.
     */
    readonly namespaceType: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
     */
    readonly region: pulumi.Output<string | undefined>;
    /**
     * ScaleUnit where the namespace gets created
     */
    readonly scaleUnit: pulumi.Output<string | undefined>;
    /**
     * Endpoint you can use to perform NotificationHub operations.
     */
    readonly serviceBusEndpoint: pulumi.Output<string | undefined>;
    /**
     * The sku of the created namespace
     */
    readonly sku: pulumi.Output<outputs.notificationhubs.v20170401.SkuResponse | undefined>;
    /**
     * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * The Id of the Azure subscription associated with the namespace.
     */
    readonly subscriptionId: pulumi.Output<string | undefined>;
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
     * The time the namespace was updated.
     */
    readonly updatedAt: pulumi.Output<string | undefined>;
    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * The time the namespace was created.
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * Whether or not the namespace is set as Critical.
     */
    readonly critical?: pulumi.Input<boolean>;
    /**
     * Data center for the namespace
     */
    readonly dataCenter?: pulumi.Input<string>;
    /**
     * Whether or not the namespace is currently enabled.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the namespace.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The namespace type.
     */
    readonly namespaceType?: pulumi.Input<string>;
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * ScaleUnit where the namespace gets created
     */
    readonly scaleUnit?: pulumi.Input<string>;
    /**
     * Endpoint you can use to perform NotificationHub operations.
     */
    readonly serviceBusEndpoint?: pulumi.Input<string>;
    /**
     * The sku of the created namespace
     */
    readonly sku?: pulumi.Input<inputs.notificationhubs.v20170401.Sku>;
    /**
     * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The Id of the Azure subscription associated with the namespace.
     */
    readonly subscriptionId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt?: pulumi.Input<string>;
}
