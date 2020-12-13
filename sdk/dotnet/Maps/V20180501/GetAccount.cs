// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Maps.V20180501
{
    public static class GetAccount
    {
        public static Task<GetAccountResult> InvokeAsync(GetAccountArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAccountResult>("azure-nextgen:maps/v20180501:getAccount", args ?? new GetAccountArgs(), options.WithVersion());
    }


    public sealed class GetAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Maps Account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the Azure Resource Group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAccountArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAccountResult
    {
        /// <summary>
        /// The fully qualified Maps Account resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the Maps Account, which is unique within a Resource Group.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The map account properties.
        /// </summary>
        public readonly Outputs.MapsAccountPropertiesResponse Properties;
        /// <summary>
        /// The SKU of this account.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// Azure resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAccountResult(
            string id,

            string location,

            string name,

            Outputs.MapsAccountPropertiesResponse properties,

            Outputs.SkuResponse sku,

            ImmutableDictionary<string, string> tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
