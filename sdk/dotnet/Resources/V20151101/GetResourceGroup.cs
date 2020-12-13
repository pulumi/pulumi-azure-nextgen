// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20151101
{
    public static class GetResourceGroup
    {
        public static Task<GetResourceGroupResult> InvokeAsync(GetResourceGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetResourceGroupResult>("azure-nextgen:resources/v20151101:getResourceGroup", args ?? new GetResourceGroupArgs(), options.WithVersion());
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
        /// Gets the ID of the resource group.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Gets or sets the location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Gets or sets the Name of the resource group.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The resource group properties.
        /// </summary>
        public readonly Outputs.ResourceGroupPropertiesResponse Properties;
        /// <summary>
        /// Gets or sets the tags attached to the resource group.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;

        [OutputConstructor]
        private GetResourceGroupResult(
            string id,

            string location,

            string? name,

            Outputs.ResourceGroupPropertiesResponse properties,

            ImmutableDictionary<string, string>? tags)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
        }
    }
}
