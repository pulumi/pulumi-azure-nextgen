import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * App Service Environment ARM resource.
 */
export declare class AppServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceEnvironment;
    /**
     * Returns true if the given object is an instance of AppServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppServiceEnvironment;
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     */
    readonly allowedMultiSizes: pulumi.Output<string>;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     */
    readonly allowedWorkerSizes: pulumi.Output<string>;
    /**
     * API Management Account associated with the App Service Environment.
     */
    readonly apiManagementAccountId: pulumi.Output<string | undefined>;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    readonly clusterSettings: pulumi.Output<outputs.web.v20190801.NameValuePairResponse[] | undefined>;
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     */
    readonly databaseEdition: pulumi.Output<string>;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     */
    readonly databaseServiceObjective: pulumi.Output<string>;
    /**
     * Default Scale Factor for FrontEnds.
     */
    readonly defaultFrontEndScaleFactor: pulumi.Output<number>;
    /**
     * DNS suffix of the App Service Environment.
     */
    readonly dnsSuffix: pulumi.Output<string | undefined>;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    readonly dynamicCacheEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Current total, used, and available worker capacities.
     */
    readonly environmentCapacities: pulumi.Output<outputs.web.v20190801.StampCapacityResponse[]>;
    /**
     * True/false indicating whether the App Service Environment is healthy.
     */
    readonly environmentIsHealthy: pulumi.Output<boolean>;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     */
    readonly environmentStatus: pulumi.Output<string>;
    /**
     * Scale factor for front-ends.
     */
    readonly frontEndScaleFactor: pulumi.Output<number | undefined>;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    readonly hasLinuxWorkers: pulumi.Output<boolean | undefined>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    readonly internalLoadBalancingMode: pulumi.Output<string | undefined>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    readonly ipsslAddressCount: pulumi.Output<number | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Last deployment action on the App Service Environment.
     */
    readonly lastAction: pulumi.Output<string>;
    /**
     * Result of the last deployment action on the App Service Environment.
     */
    readonly lastActionResult: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of VMs in the App Service Environment.
     */
    readonly maximumNumberOfMachines: pulumi.Output<number>;
    /**
     * Number of front-end instances.
     */
    readonly multiRoleCount: pulumi.Output<number | undefined>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    readonly multiSize: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Access control list for controlling traffic to the App Service Environment.
     */
    readonly networkAccessControlList: pulumi.Output<outputs.web.v20190801.NetworkAccessControlEntryResponse[] | undefined>;
    /**
     * Provisioning state of the App Service Environment.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource group of the App Service Environment.
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * Key Vault ID for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultId: pulumi.Output<string | undefined>;
    /**
     * Key Vault Secret Name for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultSecretName: pulumi.Output<string | undefined>;
    /**
     * Current status of the App Service Environment.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Subscription of the App Service Environment.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    readonly suspended: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Number of upgrade domains of the App Service Environment.
     */
    readonly upgradeDomains: pulumi.Output<number>;
    /**
     * User added ip ranges to whitelist on ASE db
     */
    readonly userWhitelistedIpRanges: pulumi.Output<string[] | undefined>;
    /**
     * Description of IP SSL mapping for the App Service Environment.
     */
    readonly vipMappings: pulumi.Output<outputs.web.v20190801.VirtualIPMappingResponse[]>;
    /**
     * Description of the Virtual Network.
     */
    readonly virtualNetwork: pulumi.Output<outputs.web.v20190801.VirtualNetworkProfileResponse>;
    /**
     * Name of the Virtual Network for the App Service Environment.
     */
    readonly vnetName: pulumi.Output<string | undefined>;
    /**
     * Resource group of the Virtual Network.
     */
    readonly vnetResourceGroupName: pulumi.Output<string | undefined>;
    /**
     * Subnet of the Virtual Network.
     */
    readonly vnetSubnetName: pulumi.Output<string | undefined>;
    /**
     * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
     */
    readonly workerPools: pulumi.Output<outputs.web.v20190801.WorkerPoolResponse[]>;
    /**
     * Create a AppServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AppServiceEnvironment resource.
 */
export interface AppServiceEnvironmentArgs {
    /**
     * API Management Account associated with the App Service Environment.
     */
    readonly apiManagementAccountId?: pulumi.Input<string>;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    readonly clusterSettings?: pulumi.Input<pulumi.Input<inputs.web.v20190801.NameValuePair>[]>;
    /**
     * DNS suffix of the App Service Environment.
     */
    readonly dnsSuffix?: pulumi.Input<string>;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    readonly dynamicCacheEnabled?: pulumi.Input<boolean>;
    /**
     * Scale factor for front-ends.
     */
    readonly frontEndScaleFactor?: pulumi.Input<number>;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    readonly hasLinuxWorkers?: pulumi.Input<boolean>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    readonly internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    readonly ipsslAddressCount?: pulumi.Input<number>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Number of front-end instances.
     */
    readonly multiRoleCount?: pulumi.Input<number>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    readonly multiSize?: pulumi.Input<string>;
    /**
     * Name of the App Service Environment.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Access control list for controlling traffic to the App Service Environment.
     */
    readonly networkAccessControlList?: pulumi.Input<pulumi.Input<inputs.web.v20190801.NetworkAccessControlEntry>[]>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Key Vault ID for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultId?: pulumi.Input<string>;
    /**
     * Key Vault Secret Name for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultSecretName?: pulumi.Input<string>;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    readonly suspended?: pulumi.Input<boolean>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * User added ip ranges to whitelist on ASE db
     */
    readonly userWhitelistedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the Virtual Network.
     */
    readonly virtualNetwork: pulumi.Input<inputs.web.v20190801.VirtualNetworkProfile>;
    /**
     * Name of the Virtual Network for the App Service Environment.
     */
    readonly vnetName?: pulumi.Input<string>;
    /**
     * Resource group of the Virtual Network.
     */
    readonly vnetResourceGroupName?: pulumi.Input<string>;
    /**
     * Subnet of the Virtual Network.
     */
    readonly vnetSubnetName?: pulumi.Input<string>;
    /**
     * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
     */
    readonly workerPools: pulumi.Input<pulumi.Input<inputs.web.v20190801.WorkerPool>[]>;
}
