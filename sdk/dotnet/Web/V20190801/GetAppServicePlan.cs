// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20190801
{
    public static class GetAppServicePlan
    {
        public static Task<GetAppServicePlanResult> InvokeAsync(GetAppServicePlanArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAppServicePlanResult>("azure-nextgen:web/v20190801:getAppServicePlan", args ?? new GetAppServicePlanArgs(), options.WithVersion());
    }


    public sealed class GetAppServicePlanArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the App Service plan.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAppServicePlanArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAppServicePlanResult
    {
        /// <summary>
        /// The time when the server farm free offer expires.
        /// </summary>
        public readonly string? FreeOfferExpirationTime;
        /// <summary>
        /// Geographical location for the App Service plan.
        /// </summary>
        public readonly string GeoRegion;
        /// <summary>
        /// Specification for the App Service Environment to use for the App Service plan.
        /// </summary>
        public readonly Outputs.HostingEnvironmentProfileResponse? HostingEnvironmentProfile;
        /// <summary>
        /// If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        public readonly bool? HyperV;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, this App Service Plan owns spot instances.
        /// </summary>
        public readonly bool? IsSpot;
        /// <summary>
        /// Obsolete: If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        public readonly bool? IsXenon;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
        /// </summary>
        public readonly int? MaximumElasticWorkerCount;
        /// <summary>
        /// Maximum number of instances that can be assigned to this App Service plan.
        /// </summary>
        public readonly int MaximumNumberOfWorkers;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Number of apps assigned to this App Service plan.
        /// </summary>
        public readonly int NumberOfSites;
        /// <summary>
        /// If &lt;code&gt;true&lt;/code&gt;, apps assigned to this App Service plan can be scaled independently.
        /// If &lt;code&gt;false&lt;/code&gt;, apps assigned to this App Service plan will scale to all instances of the plan.
        /// </summary>
        public readonly bool? PerSiteScaling;
        /// <summary>
        /// Provisioning state of the App Service Environment.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// If Linux app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise.
        /// </summary>
        public readonly bool? Reserved;
        /// <summary>
        /// Resource group of the App Service plan.
        /// </summary>
        public readonly string ResourceGroup;
        /// <summary>
        /// Description of a SKU for a scalable resource.
        /// </summary>
        public readonly Outputs.SkuDescriptionResponse? Sku;
        /// <summary>
        /// The time when the server farm expires. Valid only if it is a spot server farm.
        /// </summary>
        public readonly string? SpotExpirationTime;
        /// <summary>
        /// App Service plan status.
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// App Service plan subscription.
        /// </summary>
        public readonly string Subscription;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Scaling worker count.
        /// </summary>
        public readonly int? TargetWorkerCount;
        /// <summary>
        /// Scaling worker size ID.
        /// </summary>
        public readonly int? TargetWorkerSizeId;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Target worker tier assigned to the App Service plan.
        /// </summary>
        public readonly string? WorkerTierName;

        [OutputConstructor]
        private GetAppServicePlanResult(
            string? freeOfferExpirationTime,

            string geoRegion,

            Outputs.HostingEnvironmentProfileResponse? hostingEnvironmentProfile,

            bool? hyperV,

            string id,

            bool? isSpot,

            bool? isXenon,

            string? kind,

            string location,

            int? maximumElasticWorkerCount,

            int maximumNumberOfWorkers,

            string name,

            int numberOfSites,

            bool? perSiteScaling,

            string provisioningState,

            bool? reserved,

            string resourceGroup,

            Outputs.SkuDescriptionResponse? sku,

            string? spotExpirationTime,

            string status,

            string subscription,

            ImmutableDictionary<string, string>? tags,

            int? targetWorkerCount,

            int? targetWorkerSizeId,

            string type,

            string? workerTierName)
        {
            FreeOfferExpirationTime = freeOfferExpirationTime;
            GeoRegion = geoRegion;
            HostingEnvironmentProfile = hostingEnvironmentProfile;
            HyperV = hyperV;
            Id = id;
            IsSpot = isSpot;
            IsXenon = isXenon;
            Kind = kind;
            Location = location;
            MaximumElasticWorkerCount = maximumElasticWorkerCount;
            MaximumNumberOfWorkers = maximumNumberOfWorkers;
            Name = name;
            NumberOfSites = numberOfSites;
            PerSiteScaling = perSiteScaling;
            ProvisioningState = provisioningState;
            Reserved = reserved;
            ResourceGroup = resourceGroup;
            Sku = sku;
            SpotExpirationTime = spotExpirationTime;
            Status = status;
            Subscription = subscription;
            Tags = tags;
            TargetWorkerCount = targetWorkerCount;
            TargetWorkerSizeId = targetWorkerSizeId;
            Type = type;
            WorkerTierName = workerTierName;
        }
    }
}
