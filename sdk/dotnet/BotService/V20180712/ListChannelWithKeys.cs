// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.V20180712
{
    public static class ListChannelWithKeys
    {
        public static Task<ListChannelWithKeysResult> InvokeAsync(ListChannelWithKeysArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListChannelWithKeysResult>("azure-nextgen:botservice/v20180712:listChannelWithKeys", args ?? new ListChannelWithKeysArgs(), options.WithVersion());
    }


    public sealed class ListChannelWithKeysArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Channel resource.
        /// </summary>
        [Input("channelName", required: true)]
        public string ChannelName { get; set; } = null!;

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

        public ListChannelWithKeysArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListChannelWithKeysResult
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
        public readonly Union<Outputs.DirectLineChannelResponse, Union<Outputs.EmailChannelResponse, Union<Outputs.FacebookChannelResponse, Union<Outputs.KikChannelResponse, Union<Outputs.MsTeamsChannelResponse, Union<Outputs.SkypeChannelResponse, Union<Outputs.SlackChannelResponse, Union<Outputs.SmsChannelResponse, Union<Outputs.TelegramChannelResponse, Outputs.WebChatChannelResponse>>>>>>>>> Properties;
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
        private ListChannelWithKeysResult(
            string? etag,

            string id,

            string? kind,

            string? location,

            string name,

            Union<Outputs.DirectLineChannelResponse, Union<Outputs.EmailChannelResponse, Union<Outputs.FacebookChannelResponse, Union<Outputs.KikChannelResponse, Union<Outputs.MsTeamsChannelResponse, Union<Outputs.SkypeChannelResponse, Union<Outputs.SlackChannelResponse, Union<Outputs.SmsChannelResponse, Union<Outputs.TelegramChannelResponse, Outputs.WebChatChannelResponse>>>>>>>>> properties,

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
