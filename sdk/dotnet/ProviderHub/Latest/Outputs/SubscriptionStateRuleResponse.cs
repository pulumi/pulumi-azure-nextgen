// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.Latest.Outputs
{

    [OutputType]
    public sealed class SubscriptionStateRuleResponse
    {
        public readonly ImmutableArray<string> AllowedActions;
        public readonly string? State;

        [OutputConstructor]
        private SubscriptionStateRuleResponse(
            ImmutableArray<string> allowedActions,

            string? state)
        {
            AllowedActions = allowedActions;
            State = state;
        }
    }
}
