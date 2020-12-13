// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.V20200301Preview
{
    public static class GetLinkedService
    {
        public static Task<GetLinkedServiceResult> InvokeAsync(GetLinkedServiceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLinkedServiceResult>("azure-nextgen:operationalinsights/v20200301preview:getLinkedService", args ?? new GetLinkedServiceArgs(), options.WithVersion());
    }


    public sealed class GetLinkedServiceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the linked service.
        /// </summary>
        [Input("linkedServiceName", required: true)]
        public string LinkedServiceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetLinkedServiceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLinkedServiceResult
    {
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the linked service.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
        /// </summary>
        public readonly string? ResourceId;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access
        /// </summary>
        public readonly string? WriteAccessResourceId;

        [OutputConstructor]
        private GetLinkedServiceResult(
            string id,

            string name,

            string? provisioningState,

            string? resourceId,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? writeAccessResourceId)
        {
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceId = resourceId;
            Tags = tags;
            Type = type;
            WriteAccessResourceId = writeAccessResourceId;
        }
    }
}
