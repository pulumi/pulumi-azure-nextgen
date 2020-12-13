// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.V20201001
{
    public static class GetDeploymentAtManagementGroupScope
    {
        public static Task<GetDeploymentAtManagementGroupScopeResult> InvokeAsync(GetDeploymentAtManagementGroupScopeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDeploymentAtManagementGroupScopeResult>("azure-nextgen:management/v20201001:getDeploymentAtManagementGroupScope", args ?? new GetDeploymentAtManagementGroupScopeArgs(), options.WithVersion());
    }


    public sealed class GetDeploymentAtManagementGroupScopeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the deployment.
        /// </summary>
        [Input("deploymentName", required: true)]
        public string DeploymentName { get; set; } = null!;

        /// <summary>
        /// The management group ID.
        /// </summary>
        [Input("groupId", required: true)]
        public string GroupId { get; set; } = null!;

        public GetDeploymentAtManagementGroupScopeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDeploymentAtManagementGroupScopeResult
    {
        /// <summary>
        /// The ID of the deployment.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// the location of the deployment.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the deployment.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Deployment properties.
        /// </summary>
        public readonly Outputs.DeploymentPropertiesExtendedResponse Properties;
        /// <summary>
        /// Deployment tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the deployment.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDeploymentAtManagementGroupScopeResult(
            string id,

            string? location,

            string name,

            Outputs.DeploymentPropertiesExtendedResponse properties,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
