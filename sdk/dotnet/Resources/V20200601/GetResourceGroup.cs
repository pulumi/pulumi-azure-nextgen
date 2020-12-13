// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20200601
{
    public static class GetResourceGroup
    {
        public static Task<GetResourceGroupResult> InvokeAsync(GetResourceGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetResourceGroupResult>("azure-nextgen:resources/v20200601:getResourceGroup", args ?? new GetResourceGroupArgs(), options.WithVersion());
    }


    public sealed class GetResourceGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group to get. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetResourceGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetResourceGroupResult
    {
        /// <summary>
        /// The ID of the resource group.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The ID of the resource that manages this resource group.
        /// </summary>
        public readonly string? ManagedBy;
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource group properties.
        /// </summary>
        public readonly Outputs.ResourceGroupPropertiesResponse Properties;
        /// <summary>
        /// The tags attached to the resource group.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource group.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetResourceGroupResult(
            string id,

            string location,

            string? managedBy,

            string name,

            Outputs.ResourceGroupPropertiesResponse properties,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            ManagedBy = managedBy;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
