// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20200921Preview
{
    public static class GetWorkspace
    {
        public static Task<GetWorkspaceResult> InvokeAsync(GetWorkspaceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWorkspaceResult>("azure-nextgen:desktopvirtualization/v20200921preview:getWorkspace", args ?? new GetWorkspaceArgs(), options.WithVersion());
    }


    public sealed class GetWorkspaceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetWorkspaceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWorkspaceResult
    {
        /// <summary>
        /// List of applicationGroup resource Ids.
        /// </summary>
        public readonly ImmutableArray<string> ApplicationGroupReferences;
        /// <summary>
        /// Description of Workspace.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Friendly name of Workspace.
        /// </summary>
        public readonly string? FriendlyName;
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
        private GetWorkspaceResult(
            ImmutableArray<string> applicationGroupReferences,

            string? description,

            string? friendlyName,

            string id,

            string location,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            ApplicationGroupReferences = applicationGroupReferences;
            Description = description;
            FriendlyName = friendlyName;
            Id = id;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
