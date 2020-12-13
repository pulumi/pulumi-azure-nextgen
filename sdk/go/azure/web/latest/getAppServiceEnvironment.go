// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAppServiceEnvironment(ctx *pulumi.Context, args *LookupAppServiceEnvironmentArgs, opts ...pulumi.InvokeOption) (*LookupAppServiceEnvironmentResult, error) {
	var rv LookupAppServiceEnvironmentResult
	err := ctx.Invoke("azure-nextgen:web/latest:getAppServiceEnvironment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAppServiceEnvironmentArgs struct {
	// Name of the App Service Environment.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// App Service Environment ARM resource.
type LookupAppServiceEnvironmentResult struct {
	// List of comma separated strings describing which VM sizes are allowed for front-ends.
	AllowedMultiSizes string `pulumi:"allowedMultiSizes"`
	// List of comma separated strings describing which VM sizes are allowed for workers.
	AllowedWorkerSizes string `pulumi:"allowedWorkerSizes"`
	// API Management Account associated with the App Service Environment.
	ApiManagementAccountId *string `pulumi:"apiManagementAccountId"`
	// Custom settings for changing the behavior of the App Service Environment.
	ClusterSettings []NameValuePairResponse `pulumi:"clusterSettings"`
	// Edition of the metadata database for the App Service Environment, e.g. "Standard".
	DatabaseEdition string `pulumi:"databaseEdition"`
	// Service objective of the metadata database for the App Service Environment, e.g. "S0".
	DatabaseServiceObjective string `pulumi:"databaseServiceObjective"`
	// Default Scale Factor for FrontEnds.
	DefaultFrontEndScaleFactor int `pulumi:"defaultFrontEndScaleFactor"`
	// DNS suffix of the App Service Environment.
	DnsSuffix *string `pulumi:"dnsSuffix"`
	// True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
	// (most likely because NSG blocked the incoming traffic).
	DynamicCacheEnabled *bool `pulumi:"dynamicCacheEnabled"`
	// Current total, used, and available worker capacities.
	EnvironmentCapacities []StampCapacityResponse `pulumi:"environmentCapacities"`
	// True/false indicating whether the App Service Environment is healthy.
	EnvironmentIsHealthy bool `pulumi:"environmentIsHealthy"`
	// Detailed message about with results of the last check of the App Service Environment.
	EnvironmentStatus string `pulumi:"environmentStatus"`
	// Scale factor for front-ends.
	FrontEndScaleFactor *int `pulumi:"frontEndScaleFactor"`
	// Flag that displays whether an ASE has linux workers or not
	HasLinuxWorkers *bool `pulumi:"hasLinuxWorkers"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
	InternalLoadBalancingMode *string `pulumi:"internalLoadBalancingMode"`
	// Number of IP SSL addresses reserved for the App Service Environment.
	IpsslAddressCount *int `pulumi:"ipsslAddressCount"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Last deployment action on the App Service Environment.
	LastAction string `pulumi:"lastAction"`
	// Result of the last deployment action on the App Service Environment.
	LastActionResult string `pulumi:"lastActionResult"`
	// Resource Location.
	Location string `pulumi:"location"`
	// Maximum number of VMs in the App Service Environment.
	MaximumNumberOfMachines int `pulumi:"maximumNumberOfMachines"`
	// Number of front-end instances.
	MultiRoleCount *int `pulumi:"multiRoleCount"`
	// Front-end VM size, e.g. "Medium", "Large".
	MultiSize *string `pulumi:"multiSize"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Access control list for controlling traffic to the App Service Environment.
	NetworkAccessControlList []NetworkAccessControlEntryResponse `pulumi:"networkAccessControlList"`
	// Provisioning state of the App Service Environment.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource group of the App Service Environment.
	ResourceGroup string `pulumi:"resourceGroup"`
	// Key Vault ID for ILB App Service Environment default SSL certificate
	SslCertKeyVaultId *string `pulumi:"sslCertKeyVaultId"`
	// Key Vault Secret Name for ILB App Service Environment default SSL certificate
	SslCertKeyVaultSecretName *string `pulumi:"sslCertKeyVaultSecretName"`
	// Current status of the App Service Environment.
	Status string `pulumi:"status"`
	// Subscription of the App Service Environment.
	SubscriptionId string `pulumi:"subscriptionId"`
	// <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
	//  (most likely because NSG blocked the incoming traffic).
	Suspended *bool `pulumi:"suspended"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// Number of upgrade domains of the App Service Environment.
	UpgradeDomains int `pulumi:"upgradeDomains"`
	// User added ip ranges to whitelist on ASE db
	UserWhitelistedIpRanges []string `pulumi:"userWhitelistedIpRanges"`
	// Description of IP SSL mapping for the App Service Environment.
	VipMappings []VirtualIPMappingResponse `pulumi:"vipMappings"`
	// Description of the Virtual Network.
	VirtualNetwork VirtualNetworkProfileResponse `pulumi:"virtualNetwork"`
	// Name of the Virtual Network for the App Service Environment.
	VnetName *string `pulumi:"vnetName"`
	// Resource group of the Virtual Network.
	VnetResourceGroupName *string `pulumi:"vnetResourceGroupName"`
	// Subnet of the Virtual Network.
	VnetSubnetName *string `pulumi:"vnetSubnetName"`
	// Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
	WorkerPools []WorkerPoolResponse `pulumi:"workerPools"`
}
