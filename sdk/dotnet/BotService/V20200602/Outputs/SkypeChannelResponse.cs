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
    public sealed class SkypeChannelResponse
    {
        /// <summary>
        /// The channel name
        /// Expected value is 'SkypeChannel'.
        /// </summary>
        public readonly string ChannelName;
        /// <summary>
        /// The set of properties specific to Skype channel resource
        /// </summary>
        public readonly Outputs.SkypeChannelPropertiesResponse? Properties;

        [OutputConstructor]
        private SkypeChannelResponse(
            string channelName,

            Outputs.SkypeChannelPropertiesResponse? properties)
        {
            ChannelName = channelName;
            Properties = properties;
        }
    }
}
