// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20191001Preview.Inputs
{

    /// <summary>
    /// Defines the NSG resource settings.
    /// </summary>
    public sealed class NetworkSecurityGroupResourceSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
        /// Expected value is 'Microsoft.Network/networkSecurityGroups'.
        /// </summary>
        [Input("resourceType", required: true)]
        public Input<string> ResourceType { get; set; } = null!;

        [Input("securityRules")]
        private InputList<Inputs.NsgSecurityRuleArgs>? _securityRules;

        /// <summary>
        /// Gets or sets Security rules of network security group.
        /// </summary>
        public InputList<Inputs.NsgSecurityRuleArgs> SecurityRules
        {
            get => _securityRules ?? (_securityRules = new InputList<Inputs.NsgSecurityRuleArgs>());
            set => _securityRules = value;
        }

        /// <summary>
        /// Gets or sets the target Resource name.
        /// </summary>
        [Input("targetResourceName", required: true)]
        public Input<string> TargetResourceName { get; set; } = null!;

        public NetworkSecurityGroupResourceSettingsArgs()
        {
        }
    }
}
