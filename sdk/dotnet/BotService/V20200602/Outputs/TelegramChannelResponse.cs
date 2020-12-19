// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.V20200602.Outputs
{

    [OutputType]
    public sealed class TelegramChannelResponse
    {
        /// <summary>
        /// The channel name
        /// Expected value is 'TelegramChannel'.
        /// </summary>
        public readonly string ChannelName;
        /// <summary>
        /// The set of properties specific to Telegram channel resource
        /// </summary>
        public readonly Outputs.TelegramChannelPropertiesResponse? Properties;

        [OutputConstructor]
        private TelegramChannelResponse(
            string channelName,

            Outputs.TelegramChannelPropertiesResponse? properties)
        {
            ChannelName = channelName;
            Properties = properties;
        }
    }
}
