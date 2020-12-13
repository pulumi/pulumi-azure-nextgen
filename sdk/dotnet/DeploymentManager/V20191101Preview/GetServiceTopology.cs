// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DeploymentManager.V20191101Preview
{
    public static class GetServiceTopology
    {
        public static Task<GetServiceTopologyResult> InvokeAsync(GetServiceTopologyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServiceTopologyResult>("azure-nextgen:deploymentmanager/v20191101preview:getServiceTopology", args ?? new GetServiceTopologyArgs(), options.WithVersion());
    }


    public sealed class GetServiceTopologyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the service topology .
        /// </summary>
        [Input("serviceTopologyName", required: true)]
        public string ServiceTopologyName { get; set; } = null!;

        public GetServiceTopologyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServiceTopologyResult
    {
        /// <summary>
        /// The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.
        /// </summary>
        public readonly string? ArtifactSourceId;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetServiceTopologyResult(
            string? artifactSourceId,

            string id,

            string location,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            ArtifactSourceId = artifactSourceId;
            Id = id;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
