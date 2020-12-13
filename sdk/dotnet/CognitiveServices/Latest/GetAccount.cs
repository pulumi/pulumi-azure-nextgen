// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CognitiveServices.Latest
{
    public static class GetAccount
    {
        public static Task<GetAccountResult> InvokeAsync(GetAccountArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAccountResult>("azure-nextgen:cognitiveservices/latest:getAccount", args ?? new GetAccountArgs(), options.WithVersion());
    }


    public sealed class GetAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of Cognitive Services account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
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
        /// Entity Tag
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The id of the created account
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of Cognitive Services account.
        /// </summary>
        public readonly Outputs.IdentityResponse? Identity;
        /// <summary>
        /// The Kind of the resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// The location of the resource
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the created account
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties of Cognitive Services account.
        /// </summary>
        public readonly Outputs.CognitiveServicesAccountPropertiesResponse Properties;
        /// <summary>
        /// The SKU of Cognitive Services account.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAccountResult(
            string etag,

            string id,

            Outputs.IdentityResponse? identity,

            string? kind,

            string? location,

            string name,

            Outputs.CognitiveServicesAccountPropertiesResponse properties,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Identity = identity;
            Kind = kind;
            Location = location;
            Name = name;
            Properties = properties;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
