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
    public sealed class MsTeamsChannelResponse
    {
        /// <summary>
        /// The channel name
        /// Expected value is 'MsTeamsChannel'.
        /// </summary>
        public readonly string ChannelName;
        /// <summary>
        /// The set of properties specific to Microsoft Teams channel resource
        /// </summary>
        public readonly Outputs.MsTeamsChannelPropertiesResponse? Properties;

        [OutputConstructor]
        private MsTeamsChannelResponse(
            string channelName,

            Outputs.MsTeamsChannelPropertiesResponse? properties)
        {
            ChannelName = channelName;
            Properties = properties;
        }
    }
}
