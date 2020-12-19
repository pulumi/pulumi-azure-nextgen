// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.V20200602.Inputs
{

    /// <summary>
    /// Slack channel definition
    /// </summary>
    public sealed class SlackChannelArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The channel name
        /// Expected value is 'SlackChannel'.
        /// </summary>
        [Input("channelName", required: true)]
        public Input<string> ChannelName { get; set; } = null!;

        /// <summary>
        /// The set of properties specific to Slack channel resource
        /// </summary>
        [Input("properties")]
        public Input<Inputs.SlackChannelPropertiesArgs>? Properties { get; set; }

        public SlackChannelArgs()
        {
        }
    }
}
