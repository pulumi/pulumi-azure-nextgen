import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of an hostingEnvironment (App Service Environment)
 */
export declare class ManagedHostingEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing ManagedHostingEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedHostingEnvironment;
    /**
     * Returns true if the given object is an instance of ManagedHostingEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedHostingEnvironment;
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends
     */
    readonly allowedMultiSizes: pulumi.Output<string | undefined>;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers
     */
    readonly allowedWorkerSizes: pulumi.Output<string | undefined>;
    /**
     * Api Management Account associated with this Hosting Environment
     */
    readonly apiManagementAccountId: pulumi.Output<string | undefined>;
    /**
     * Custom settings for changing the behavior of the hosting environment
     */
    readonly clusterSettings: pulumi.Output<outputs.web.v20150801.NameValuePairResponse[] | undefined>;
    /**
     * Edition of the metadata database for the hostingEnvironment (App Service Environment) e.g. "Standard"
     */
    readonly databaseEdition: pulumi.Output<string | undefined>;
    /**
     * Service objective of the metadata database for the hostingEnvironment (App Service Environment) e.g. "S0"
     */
    readonly databaseServiceObjective: pulumi.Output<string | undefined>;
    /**
     * DNS suffix of the hostingEnvironment (App Service Environment)
     */
    readonly dnsSuffix: pulumi.Output<string | undefined>;
    /**
     * Current total, used, and available worker capacities
     */
    readonly environmentCapacities: pulumi.Output<outputs.web.v20150801.StampCapacityResponse[] | undefined>;
    /**
     * True/false indicating whether the hostingEnvironment (App Service Environment) is healthy
     */
    readonly environmentIsHealthy: pulumi.Output<boolean | undefined>;
    /**
     * Detailed message about with results of the last check of the hostingEnvironment (App Service Environment)
     */
    readonly environmentStatus: pulumi.Output<string | undefined>;
    /**
     * Specifies which endpoints to serve internally in the hostingEnvironment's (App Service Environment) VNET
     */
    readonly internalLoadBalancingMode: pulumi.Output<string | undefined>;
    /**
     * Number of IP SSL addresses reserved for this hostingEnvironment (App Service Environment)
     */
    readonly ipsslAddressCount: pulumi.Output<number | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Last deployment action on this hostingEnvironment (App Service Environment)
     */
    readonly lastAction: pulumi.Output<string | undefined>;
    /**
     * Result of the last deployment action on this hostingEnvironment (App Service Environment)
     */
    readonly lastActionResult: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of VMs in this hostingEnvironment (App Service Environment)
     */
    readonly maximumNumberOfMachines: pulumi.Output<number | undefined>;
    /**
     * Number of front-end instances
     */
    readonly multiRoleCount: pulumi.Output<number | undefined>;
    /**
     * Front-end VM size, e.g. "Medium", "Large"
     */
    readonly multiSize: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Access control list for controlling traffic to the hostingEnvironment (App Service Environment)
     */
    readonly networkAccessControlList: pulumi.Output<outputs.web.v20150801.NetworkAccessControlEntryResponse[] | undefined>;
    /**
     * Provisioning state of the hostingEnvironment (App Service Environment)
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Resource group of the hostingEnvironment (App Service Environment)
     */
    readonly resourceGroup: pulumi.Output<string | undefined>;
    /**
     * Current status of the hostingEnvironment (App Service Environment)
     */
    readonly status: pulumi.Output<string>;
    /**
     * Subscription of the hostingEnvironment (App Service Environment)
     */
    readonly subscriptionId: pulumi.Output<string | undefined>;
    /**
     * True/false indicating whether the hostingEnvironment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     *             (most likely because NSG blocked the incoming traffic)
     */
    readonly suspended: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Number of upgrade domains of this hostingEnvironment (App Service Environment)
     */
    readonly upgradeDomains: pulumi.Output<number | undefined>;
    /**
     * Description of IP SSL mapping for this hostingEnvironment (App Service Environment)
     */
    readonly vipMappings: pulumi.Output<outputs.web.v20150801.VirtualIPMappingResponse[] | undefined>;
    /**
     * Description of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly virtualNetwork: pulumi.Output<outputs.web.v20150801.VirtualNetworkProfileResponse | undefined>;
    /**
     * Name of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetName: pulumi.Output<string | undefined>;
    /**
     * Resource group of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetResourceGroupName: pulumi.Output<string | undefined>;
    /**
     * Subnet of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetSubnetName: pulumi.Output<string | undefined>;
    /**
     * Description of worker pools with worker size ids, VM sizes, and number of workers in each pool
     */
    readonly workerPools: pulumi.Output<outputs.web.v20150801.WorkerPoolResponse[] | undefined>;
    /**
     * Create a ManagedHostingEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedHostingEnvironmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ManagedHostingEnvironment resource.
 */
export interface ManagedHostingEnvironmentArgs {
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends
     */
    readonly allowedMultiSizes?: pulumi.Input<string>;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers
     */
    readonly allowedWorkerSizes?: pulumi.Input<string>;
    /**
     * Api Management Account associated with this Hosting Environment
     */
    readonly apiManagementAccountId?: pulumi.Input<string>;
    /**
     * Custom settings for changing the behavior of the hosting environment
     */
    readonly clusterSettings?: pulumi.Input<pulumi.Input<inputs.web.v20150801.NameValuePair>[]>;
    /**
     * Edition of the metadata database for the hostingEnvironment (App Service Environment) e.g. "Standard"
     */
    readonly databaseEdition?: pulumi.Input<string>;
    /**
     * Service objective of the metadata database for the hostingEnvironment (App Service Environment) e.g. "S0"
     */
    readonly databaseServiceObjective?: pulumi.Input<string>;
    /**
     * DNS suffix of the hostingEnvironment (App Service Environment)
     */
    readonly dnsSuffix?: pulumi.Input<string>;
    /**
     * Current total, used, and available worker capacities
     */
    readonly environmentCapacities?: pulumi.Input<pulumi.Input<inputs.web.v20150801.StampCapacity>[]>;
    /**
     * True/false indicating whether the hostingEnvironment (App Service Environment) is healthy
     */
    readonly environmentIsHealthy?: pulumi.Input<boolean>;
    /**
     * Detailed message about with results of the last check of the hostingEnvironment (App Service Environment)
     */
    readonly environmentStatus?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Specifies which endpoints to serve internally in the hostingEnvironment's (App Service Environment) VNET
     */
    readonly internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * Number of IP SSL addresses reserved for this hostingEnvironment (App Service Environment)
     */
    readonly ipsslAddressCount?: pulumi.Input<number>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Last deployment action on this hostingEnvironment (App Service Environment)
     */
    readonly lastAction?: pulumi.Input<string>;
    /**
     * Result of the last deployment action on this hostingEnvironment (App Service Environment)
     */
    readonly lastActionResult?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Maximum number of VMs in this hostingEnvironment (App Service Environment)
     */
    readonly maximumNumberOfMachines?: pulumi.Input<number>;
    /**
     * Number of front-end instances
     */
    readonly multiRoleCount?: pulumi.Input<number>;
    /**
     * Front-end VM size, e.g. "Medium", "Large"
     */
    readonly multiSize?: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Access control list for controlling traffic to the hostingEnvironment (App Service Environment)
     */
    readonly networkAccessControlList?: pulumi.Input<pulumi.Input<inputs.web.v20150801.NetworkAccessControlEntry>[]>;
    /**
     * Provisioning state of the hostingEnvironment (App Service Environment)
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Resource group of the hostingEnvironment (App Service Environment)
     */
    readonly resourceGroup?: pulumi.Input<string>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Current status of the hostingEnvironment (App Service Environment)
     */
    readonly status: pulumi.Input<string>;
    /**
     * Subscription of the hostingEnvironment (App Service Environment)
     */
    readonly subscriptionId?: pulumi.Input<string>;
    /**
     * True/false indicating whether the hostingEnvironment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     *             (most likely because NSG blocked the incoming traffic)
     */
    readonly suspended?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Number of upgrade domains of this hostingEnvironment (App Service Environment)
     */
    readonly upgradeDomains?: pulumi.Input<number>;
    /**
     * Description of IP SSL mapping for this hostingEnvironment (App Service Environment)
     */
    readonly vipMappings?: pulumi.Input<pulumi.Input<inputs.web.v20150801.VirtualIPMapping>[]>;
    /**
     * Description of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly virtualNetwork?: pulumi.Input<inputs.web.v20150801.VirtualNetworkProfile>;
    /**
     * Name of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetName?: pulumi.Input<string>;
    /**
     * Resource group of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetResourceGroupName?: pulumi.Input<string>;
    /**
     * Subnet of the hostingEnvironment's (App Service Environment) virtual network
     */
    readonly vnetSubnetName?: pulumi.Input<string>;
    /**
     * Description of worker pools with worker size ids, VM sizes, and number of workers in each pool
     */
    readonly workerPools?: pulumi.Input<pulumi.Input<inputs.web.v20150801.WorkerPool>[]>;
}
