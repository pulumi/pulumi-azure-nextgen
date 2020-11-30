// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview.Outputs
{

    [OutputType]
    public sealed class IPRuleResponse
    {
        /// <summary>
        /// The action of IP ACL rule.
        /// </summary>
        public readonly string? Action;
        /// <summary>
        /// Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
        /// </summary>
        public readonly string IPAddressOrRange;

        [OutputConstructor]
        private IPRuleResponse(
            string? action,

            string iPAddressOrRange)
        {
            Action = action;
            IPAddressOrRange = iPAddressOrRange;
        }
    }
}
