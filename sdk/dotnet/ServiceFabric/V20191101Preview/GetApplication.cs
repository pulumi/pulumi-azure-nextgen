// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20191101Preview
{
    public static class GetApplication
    {
        public static Task<GetApplicationResult> InvokeAsync(GetApplicationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationResult>("azure-nextgen:servicefabric/v20191101preview:getApplication", args ?? new GetApplicationArgs(), options.WithVersion());
    }


    public sealed class GetApplicationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the application resource.
        /// </summary>
        [Input("applicationName", required: true)]
        public string ApplicationName { get; set; } = null!;

        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetApplicationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationResult
    {
        /// <summary>
        /// Azure resource etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Azure resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Describes the managed identities for an Azure resource.
        /// </summary>
        public readonly Outputs.ManagedIdentityResponse? Identity;
        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// List of user assigned identities for the application, each mapped to a friendly name.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationUserAssignedIdentityResponse> ManagedIdentities;
        /// <summary>
        /// The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
        /// </summary>
        public readonly int? MaximumNodes;
        /// <summary>
        /// List of application capacity metric description.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationMetricDescriptionResponse> Metrics;
        /// <summary>
        /// The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
        /// </summary>
        public readonly int? MinimumNodes;
        /// <summary>
        /// Azure resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of application parameters with overridden values from their default values specified in the application manifest.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Parameters;
        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Remove the current application capacity settings.
        /// </summary>
        public readonly bool? RemoveApplicationCapacity;
        /// <summary>
        /// Azure resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Azure resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The application type name as defined in the application manifest.
        /// </summary>
        public readonly string? TypeName;
        /// <summary>
        /// The version of the application type as defined in the application manifest.
        /// </summary>
        public readonly string? TypeVersion;
        /// <summary>
        /// Describes the policy for a monitored application upgrade.
        /// </summary>
        public readonly Outputs.ApplicationUpgradePolicyResponse? UpgradePolicy;

        [OutputConstructor]
        private GetApplicationResult(
            string etag,

            string id,

            Outputs.ManagedIdentityResponse? identity,

            string? location,

            ImmutableArray<Outputs.ApplicationUserAssignedIdentityResponse> managedIdentities,

            int? maximumNodes,

            ImmutableArray<Outputs.ApplicationMetricDescriptionResponse> metrics,

            int? minimumNodes,

            string name,

            ImmutableDictionary<string, string>? parameters,

            string provisioningState,

            bool? removeApplicationCapacity,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? typeName,

            string? typeVersion,

            Outputs.ApplicationUpgradePolicyResponse? upgradePolicy)
        {
            Etag = etag;
            Id = id;
            Identity = identity;
            Location = location;
            ManagedIdentities = managedIdentities;
            MaximumNodes = maximumNodes;
            Metrics = metrics;
            MinimumNodes = minimumNodes;
            Name = name;
            Parameters = parameters;
            ProvisioningState = provisioningState;
            RemoveApplicationCapacity = removeApplicationCapacity;
            Tags = tags;
            Type = type;
            TypeName = typeName;
            TypeVersion = typeVersion;
            UpgradePolicy = upgradePolicy;
        }
    }
}
