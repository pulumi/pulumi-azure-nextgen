// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20170301.Inputs
{

    /// <summary>
    /// Application gateway web application firewall configuration.
    /// </summary>
    public sealed class ApplicationGatewayWebApplicationFirewallConfigurationArgs : Pulumi.ResourceArgs
    {
        [Input("disabledRuleGroups")]
        private InputList<Inputs.ApplicationGatewayFirewallDisabledRuleGroupArgs>? _disabledRuleGroups;

        /// <summary>
        /// The disabled rule groups.
        /// </summary>
        public InputList<Inputs.ApplicationGatewayFirewallDisabledRuleGroupArgs> DisabledRuleGroups
        {
            get => _disabledRuleGroups ?? (_disabledRuleGroups = new InputList<Inputs.ApplicationGatewayFirewallDisabledRuleGroupArgs>());
            set => _disabledRuleGroups = value;
        }

        /// <summary>
        /// Whether the web application firewall is enabled or not.
        /// </summary>
        [Input("enabled", required: true)]
        public Input<bool> Enabled { get; set; } = null!;

        /// <summary>
        /// Web application firewall mode.
        /// </summary>
        [Input("firewallMode", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20170301.ApplicationGatewayFirewallMode> FirewallMode { get; set; } = null!;

        /// <summary>
        /// The type of the web application firewall rule set. Possible values are: 'OWASP'.
        /// </summary>
        [Input("ruleSetType", required: true)]
        public Input<string> RuleSetType { get; set; } = null!;

        /// <summary>
        /// The version of the rule set type.
        /// </summary>
        [Input("ruleSetVersion", required: true)]
        public Input<string> RuleSetVersion { get; set; } = null!;

        public ApplicationGatewayWebApplicationFirewallConfigurationArgs()
        {
        }
    }
}
