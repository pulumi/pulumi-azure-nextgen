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
    public sealed class KikChannelPropertiesResponse
    {
        /// <summary>
        /// Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
        /// </summary>
        public readonly string? ApiKey;
        /// <summary>
        /// Whether this channel is enabled for the bot
        /// </summary>
        public readonly bool IsEnabled;
        /// <summary>
        /// Whether this channel is validated for the bot
        /// </summary>
        public readonly bool? IsValidated;
        /// <summary>
        /// The Kik user name
        /// </summary>
        public readonly string UserName;

        [OutputConstructor]
        private KikChannelPropertiesResponse(
            string? apiKey,

            bool isEnabled,

            bool? isValidated,

            string userName)
        {
            ApiKey = apiKey;
            IsEnabled = isEnabled;
            IsValidated = isValidated;
            UserName = userName;
        }
    }
}
