// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.V20200602
{
    public static class ListBotConnectionWithSecrets
    {
        public static Task<ListBotConnectionWithSecretsResult> InvokeAsync(ListBotConnectionWithSecretsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListBotConnectionWithSecretsResult>("azure-nextgen:botservice/v20200602:listBotConnectionWithSecrets", args ?? new ListBotConnectionWithSecretsArgs(), options.WithVersion());
    }


    public sealed class ListBotConnectionWithSecretsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Bot Service Connection Setting resource.
        /// </summary>
        [Input("connectionName", required: true)]
        public string ConnectionName { get; set; } = null!;

        /// <summary>
        /// The name of the Bot resource group in the user subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Bot resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public ListBotConnectionWithSecretsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListBotConnectionWithSecretsResult
    {
        /// <summary>
        /// Entity Tag
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Specifies the resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Required. Gets or sets the Kind of the resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The set of properties specific to bot channel resource
        /// </summary>
        public readonly Outputs.ConnectionSettingPropertiesResponse Properties;
        /// <summary>
        /// Gets or sets the SKU of the resource.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Specifies the type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListBotConnectionWithSecretsResult(
            string? etag,

            string id,

            string? kind,

            string? location,

            string name,

            Outputs.ConnectionSettingPropertiesResponse properties,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
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
