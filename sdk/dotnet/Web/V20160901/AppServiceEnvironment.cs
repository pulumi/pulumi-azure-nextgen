// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20160901
{
    /// <summary>
    /// App Service Environment ARM resource.
    /// </summary>
    public partial class AppServiceEnvironment : Pulumi.CustomResource
    {
        /// <summary>
        /// List of comma separated strings describing which VM sizes are allowed for front-ends.
        /// </summary>
        [Output("allowedMultiSizes")]
        public Output<string> AllowedMultiSizes { get; private set; } = null!;

        /// <summary>
        /// List of comma separated strings describing which VM sizes are allowed for workers.
        /// </summary>
        [Output("allowedWorkerSizes")]
        public Output<string> AllowedWorkerSizes { get; private set; } = null!;

        /// <summary>
        /// API Management Account associated with the App Service Environment.
        /// </summary>
        [Output("apiManagementAccountId")]
        public Output<string?> ApiManagementAccountId { get; private set; } = null!;

        /// <summary>
        /// Custom settings for changing the behavior of the App Service Environment.
        /// </summary>
        [Output("clusterSettings")]
        public Output<ImmutableArray<Outputs.NameValuePairResponse>> ClusterSettings { get; private set; } = null!;

        /// <summary>
        /// Edition of the metadata database for the App Service Environment, e.g. "Standard".
        /// </summary>
        [Output("databaseEdition")]
        public Output<string> DatabaseEdition { get; private set; } = null!;

        /// <summary>
        /// Service objective of the metadata database for the App Service Environment, e.g. "S0".
        /// </summary>
        [Output("databaseServiceObjective")]
        public Output<string> DatabaseServiceObjective { get; private set; } = null!;

        /// <summary>
        /// Default Scale Factor for FrontEnds.
        /// </summary>
        [Output("defaultFrontEndScaleFactor")]
        public Output<int> DefaultFrontEndScaleFactor { get; private set; } = null!;

        /// <summary>
        /// DNS suffix of the App Service Environment.
        /// </summary>
        [Output("dnsSuffix")]
        public Output<string?> DnsSuffix { get; private set; } = null!;

        /// <summary>
        /// True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
        /// (most likely because NSG blocked the incoming traffic).
        /// </summary>
        [Output("dynamicCacheEnabled")]
        public Output<bool?> DynamicCacheEnabled { get; private set; } = null!;

        /// <summary>
        /// Current total, used, and available worker capacities.
        /// </summary>
        [Output("environmentCapacities")]
        public Output<ImmutableArray<Outputs.StampCapacityResponse>> EnvironmentCapacities { get; private set; } = null!;

        /// <summary>
        /// True/false indicating whether the App Service Environment is healthy.
        /// </summary>
        [Output("environmentIsHealthy")]
        public Output<bool> EnvironmentIsHealthy { get; private set; } = null!;

        /// <summary>
        /// Detailed message about with results of the last check of the App Service Environment.
        /// </summary>
        [Output("environmentStatus")]
        public Output<string> EnvironmentStatus { get; private set; } = null!;

        /// <summary>
        /// Scale factor for front-ends.
        /// </summary>
        [Output("frontEndScaleFactor")]
        public Output<int?> FrontEndScaleFactor { get; private set; } = null!;

        /// <summary>
        /// Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
        /// </summary>
        [Output("internalLoadBalancingMode")]
        public Output<string?> InternalLoadBalancingMode { get; private set; } = null!;

        /// <summary>
        /// Number of IP SSL addresses reserved for the App Service Environment.
        /// </summary>
        [Output("ipsslAddressCount")]
        public Output<int?> IpsslAddressCount { get; private set; } = null!;

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Last deployment action on the App Service Environment.
        /// </summary>
        [Output("lastAction")]
        public Output<string> LastAction { get; private set; } = null!;

        /// <summary>
        /// Result of the last deployment action on the App Service Environment.
        /// </summary>
        [Output("lastActionResult")]
        public Output<string> LastActionResult { get; private set; } = null!;

        /// <summary>
        /// Resource Location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Maximum number of VMs in the App Service Environment.
        /// </summary>
        [Output("maximumNumberOfMachines")]
        public Output<int> MaximumNumberOfMachines { get; private set; } = null!;

        /// <summary>
        /// Number of front-end instances.
        /// </summary>
        [Output("multiRoleCount")]
        public Output<int?> MultiRoleCount { get; private set; } = null!;

        /// <summary>
        /// Front-end VM size, e.g. "Medium", "Large".
        /// </summary>
        [Output("multiSize")]
        public Output<string?> MultiSize { get; private set; } = null!;

        /// <summary>
        /// Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Access control list for controlling traffic to the App Service Environment.
        /// </summary>
        [Output("networkAccessControlList")]
        public Output<ImmutableArray<Outputs.NetworkAccessControlEntryResponse>> NetworkAccessControlList { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the App Service Environment.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource group of the App Service Environment.
        /// </summary>
        [Output("resourceGroup")]
        public Output<string> ResourceGroup { get; private set; } = null!;

        /// <summary>
        /// Current status of the App Service Environment.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// Subscription of the App Service Environment.
        /// </summary>
        [Output("subscriptionId")]
        public Output<string> SubscriptionId { get; private set; } = null!;

        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if the App Service Environment is suspended; otherwise, &lt;code&gt;false&lt;/code&gt;. The environment can be suspended, e.g. when the management endpoint is no longer available
        ///  (most likely because NSG blocked the incoming traffic).
        /// </summary>
        [Output("suspended")]
        public Output<bool?> Suspended { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Number of upgrade domains of the App Service Environment.
        /// </summary>
        [Output("upgradeDomains")]
        public Output<int> UpgradeDomains { get; private set; } = null!;

        /// <summary>
        /// User added ip ranges to whitelist on ASE db
        /// </summary>
        [Output("userWhitelistedIpRanges")]
        public Output<ImmutableArray<string>> UserWhitelistedIpRanges { get; private set; } = null!;

        /// <summary>
        /// Description of IP SSL mapping for the App Service Environment.
        /// </summary>
        [Output("vipMappings")]
        public Output<ImmutableArray<Outputs.VirtualIPMappingResponse>> VipMappings { get; private set; } = null!;

        /// <summary>
        /// Description of the Virtual Network.
        /// </summary>
        [Output("virtualNetwork")]
        public Output<Outputs.VirtualNetworkProfileResponse> VirtualNetwork { get; private set; } = null!;

        /// <summary>
        /// Name of the Virtual Network for the App Service Environment.
        /// </summary>
        [Output("vnetName")]
        public Output<string?> VnetName { get; private set; } = null!;

        /// <summary>
        /// Resource group of the Virtual Network.
        /// </summary>
        [Output("vnetResourceGroupName")]
        public Output<string?> VnetResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Subnet of the Virtual Network.
        /// </summary>
        [Output("vnetSubnetName")]
        public Output<string?> VnetSubnetName { get; private set; } = null!;

        /// <summary>
        /// Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
        /// </summary>
        [Output("workerPools")]
        public Output<ImmutableArray<Outputs.WorkerPoolResponse>> WorkerPools { get; private set; } = null!;


        /// <summary>
        /// Create a AppServiceEnvironment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AppServiceEnvironment(string name, AppServiceEnvironmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20160901:AppServiceEnvironment", name, args ?? new AppServiceEnvironmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AppServiceEnvironment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20160901:AppServiceEnvironment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:AppServiceEnvironment"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20150801:AppServiceEnvironment"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:AppServiceEnvironment"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20190801:AppServiceEnvironment"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:AppServiceEnvironment"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:AppServiceEnvironment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AppServiceEnvironment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AppServiceEnvironment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AppServiceEnvironment(name, id, options);
        }
    }

    public sealed class AppServiceEnvironmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// API Management Account associated with the App Service Environment.
        /// </summary>
        [Input("apiManagementAccountId")]
        public Input<string>? ApiManagementAccountId { get; set; }

        [Input("clusterSettings")]
        private InputList<Inputs.NameValuePairArgs>? _clusterSettings;

        /// <summary>
        /// Custom settings for changing the behavior of the App Service Environment.
        /// </summary>
        public InputList<Inputs.NameValuePairArgs> ClusterSettings
        {
            get => _clusterSettings ?? (_clusterSettings = new InputList<Inputs.NameValuePairArgs>());
            set => _clusterSettings = value;
        }

        /// <summary>
        /// DNS suffix of the App Service Environment.
        /// </summary>
        [Input("dnsSuffix")]
        public Input<string>? DnsSuffix { get; set; }

        /// <summary>
        /// True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
        /// (most likely because NSG blocked the incoming traffic).
        /// </summary>
        [Input("dynamicCacheEnabled")]
        public Input<bool>? DynamicCacheEnabled { get; set; }

        /// <summary>
        /// Scale factor for front-ends.
        /// </summary>
        [Input("frontEndScaleFactor")]
        public Input<int>? FrontEndScaleFactor { get; set; }

        /// <summary>
        /// Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
        /// </summary>
        [Input("internalLoadBalancingMode")]
        public Input<Pulumi.AzureNextGen.Web.V20160901.InternalLoadBalancingMode>? InternalLoadBalancingMode { get; set; }

        /// <summary>
        /// Number of IP SSL addresses reserved for the App Service Environment.
        /// </summary>
        [Input("ipsslAddressCount")]
        public Input<int>? IpsslAddressCount { get; set; }

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Resource Location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Number of front-end instances.
        /// </summary>
        [Input("multiRoleCount")]
        public Input<int>? MultiRoleCount { get; set; }

        /// <summary>
        /// Front-end VM size, e.g. "Medium", "Large".
        /// </summary>
        [Input("multiSize")]
        public Input<string>? MultiSize { get; set; }

        /// <summary>
        /// Name of the App Service Environment.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("networkAccessControlList")]
        private InputList<Inputs.NetworkAccessControlEntryArgs>? _networkAccessControlList;

        /// <summary>
        /// Access control list for controlling traffic to the App Service Environment.
        /// </summary>
        public InputList<Inputs.NetworkAccessControlEntryArgs> NetworkAccessControlList
        {
            get => _networkAccessControlList ?? (_networkAccessControlList = new InputList<Inputs.NetworkAccessControlEntryArgs>());
            set => _networkAccessControlList = value;
        }

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if the App Service Environment is suspended; otherwise, &lt;code&gt;false&lt;/code&gt;. The environment can be suspended, e.g. when the management endpoint is no longer available
        ///  (most likely because NSG blocked the incoming traffic).
        /// </summary>
        [Input("suspended")]
        public Input<bool>? Suspended { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("userWhitelistedIpRanges")]
        private InputList<string>? _userWhitelistedIpRanges;

        /// <summary>
        /// User added ip ranges to whitelist on ASE db
        /// </summary>
        public InputList<string> UserWhitelistedIpRanges
        {
            get => _userWhitelistedIpRanges ?? (_userWhitelistedIpRanges = new InputList<string>());
            set => _userWhitelistedIpRanges = value;
        }

        /// <summary>
        /// Description of the Virtual Network.
        /// </summary>
        [Input("virtualNetwork", required: true)]
        public Input<Inputs.VirtualNetworkProfileArgs> VirtualNetwork { get; set; } = null!;

        /// <summary>
        /// Name of the Virtual Network for the App Service Environment.
        /// </summary>
        [Input("vnetName")]
        public Input<string>? VnetName { get; set; }

        /// <summary>
        /// Resource group of the Virtual Network.
        /// </summary>
        [Input("vnetResourceGroupName")]
        public Input<string>? VnetResourceGroupName { get; set; }

        /// <summary>
        /// Subnet of the Virtual Network.
        /// </summary>
        [Input("vnetSubnetName")]
        public Input<string>? VnetSubnetName { get; set; }

        [Input("workerPools", required: true)]
        private InputList<Inputs.WorkerPoolArgs>? _workerPools;

        /// <summary>
        /// Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
        /// </summary>
        public InputList<Inputs.WorkerPoolArgs> WorkerPools
        {
            get => _workerPools ?? (_workerPools = new InputList<Inputs.WorkerPoolArgs>());
            set => _workerPools = value;
        }

        public AppServiceEnvironmentArgs()
        {
        }
    }
}
