// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20190801
{
    /// <summary>
    /// App Service plan.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/v20190801:AppServicePlan")]
    public partial class AppServicePlan : Pulumi.CustomResource
    {
        /// <summary>
        /// The time when the server farm free offer expires.
        /// </summary>
        [Output("freeOfferExpirationTime")]
        public Output<string?> FreeOfferExpirationTime { get; private set; } = null!;

        /// <summary>
        /// Geographical location for the App Service plan.
        /// </summary>
        [Output("geoRegion")]
        public Output<string> GeoRegion { get; private set; } = null!;

        /// <summary>
        /// Specification for the App Service Environment to use for the App Service plan.
        /// </summary>
        [Output("hostingEnvironmentProfile")]
        public Output<Outputs.HostingEnvironmentProfileResponse?> HostingEnvironmentProfile { get; private set; } = null!;

        /// <summary>
        /// If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Output("hyperV")]
        public Output<bool?> HyperV { get; private set; } = null!;

        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, this App Service Plan owns spot instances.
        /// </summary>
        [Output("isSpot")]
        public Output<bool?> IsSpot { get; private set; } = null!;

        /// <summary>
        /// Obsolete: If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Output("isXenon")]
        public Output<bool?> IsXenon { get; private set; } = null!;

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource Location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
        /// </summary>
        [Output("maximumElasticWorkerCount")]
        public Output<int?> MaximumElasticWorkerCount { get; private set; } = null!;

        /// <summary>
        /// Maximum number of instances that can be assigned to this App Service plan.
        /// </summary>
        [Output("maximumNumberOfWorkers")]
        public Output<int> MaximumNumberOfWorkers { get; private set; } = null!;

        /// <summary>
        /// Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Number of apps assigned to this App Service plan.
        /// </summary>
        [Output("numberOfSites")]
        public Output<int> NumberOfSites { get; private set; } = null!;

        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, apps assigned to this App Service plan can be scaled independently.
        /// If &lt;code&gt;false&lt;/code&gt;, apps assigned to this App Service plan will scale to all instances of the plan.
        /// </summary>
        [Output("perSiteScaling")]
        public Output<bool?> PerSiteScaling { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the App Service Environment.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// If Linux app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Output("reserved")]
        public Output<bool?> Reserved { get; private set; } = null!;

        /// <summary>
        /// Resource group of the App Service plan.
        /// </summary>
        [Output("resourceGroup")]
        public Output<string> ResourceGroup { get; private set; } = null!;

        /// <summary>
        /// Description of a SKU for a scalable resource.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuDescriptionResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// The time when the server farm expires. Valid only if it is a spot server farm.
        /// </summary>
        [Output("spotExpirationTime")]
        public Output<string?> SpotExpirationTime { get; private set; } = null!;

        /// <summary>
        /// App Service plan status.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// App Service plan subscription.
        /// </summary>
        [Output("subscription")]
        public Output<string> Subscription { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Scaling worker count.
        /// </summary>
        [Output("targetWorkerCount")]
        public Output<int?> TargetWorkerCount { get; private set; } = null!;

        /// <summary>
        /// Scaling worker size ID.
        /// </summary>
        [Output("targetWorkerSizeId")]
        public Output<int?> TargetWorkerSizeId { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Target worker tier assigned to the App Service plan.
        /// </summary>
        [Output("workerTierName")]
        public Output<string?> WorkerTierName { get; private set; } = null!;


        /// <summary>
        /// Create a AppServicePlan resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AppServicePlan(string name, AppServicePlanArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20190801:AppServicePlan", name, args ?? new AppServicePlanArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AppServicePlan(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20190801:AppServicePlan", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:AppServicePlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20150801:AppServicePlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160901:AppServicePlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:AppServicePlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:AppServicePlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:AppServicePlan"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AppServicePlan resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AppServicePlan Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AppServicePlan(name, id, options);
        }
    }

    public sealed class AppServicePlanArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The time when the server farm free offer expires.
        /// </summary>
        [Input("freeOfferExpirationTime")]
        public Input<string>? FreeOfferExpirationTime { get; set; }

        /// <summary>
        /// Specification for the App Service Environment to use for the App Service plan.
        /// </summary>
        [Input("hostingEnvironmentProfile")]
        public Input<Inputs.HostingEnvironmentProfileArgs>? HostingEnvironmentProfile { get; set; }

        /// <summary>
        /// If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Input("hyperV")]
        public Input<bool>? HyperV { get; set; }

        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, this App Service Plan owns spot instances.
        /// </summary>
        [Input("isSpot")]
        public Input<bool>? IsSpot { get; set; }

        /// <summary>
        /// Obsolete: If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Input("isXenon")]
        public Input<bool>? IsXenon { get; set; }

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
        /// Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
        /// </summary>
        [Input("maximumElasticWorkerCount")]
        public Input<int>? MaximumElasticWorkerCount { get; set; }

        /// <summary>
        /// Name of the App Service plan.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, apps assigned to this App Service plan can be scaled independently.
        /// If &lt;code&gt;false&lt;/code&gt;, apps assigned to this App Service plan will scale to all instances of the plan.
        /// </summary>
        [Input("perSiteScaling")]
        public Input<bool>? PerSiteScaling { get; set; }

        /// <summary>
        /// If Linux app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        [Input("reserved")]
        public Input<bool>? Reserved { get; set; }

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Description of a SKU for a scalable resource.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuDescriptionArgs>? Sku { get; set; }

        /// <summary>
        /// The time when the server farm expires. Valid only if it is a spot server farm.
        /// </summary>
        [Input("spotExpirationTime")]
        public Input<string>? SpotExpirationTime { get; set; }

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

        /// <summary>
        /// Scaling worker count.
        /// </summary>
        [Input("targetWorkerCount")]
        public Input<int>? TargetWorkerCount { get; set; }

        /// <summary>
        /// Scaling worker size ID.
        /// </summary>
        [Input("targetWorkerSizeId")]
        public Input<int>? TargetWorkerSizeId { get; set; }

        /// <summary>
        /// Target worker tier assigned to the App Service plan.
        /// </summary>
        [Input("workerTierName")]
        public Input<string>? WorkerTierName { get; set; }

        public AppServicePlanArgs()
        {
        }
    }
}
