// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.Latest.Inputs
{

    /// <summary>
    /// Managed Virtual Network Settings
    /// </summary>
    public sealed class ManagedVirtualNetworkSettingsArgs : Pulumi.ResourceArgs
    {
        [Input("allowedAadTenantIdsForLinking")]
        private InputList<string>? _allowedAadTenantIdsForLinking;

        /// <summary>
        /// Allowed Aad Tenant Ids For Linking
        /// </summary>
        public InputList<string> AllowedAadTenantIdsForLinking
        {
            get => _allowedAadTenantIdsForLinking ?? (_allowedAadTenantIdsForLinking = new InputList<string>());
            set => _allowedAadTenantIdsForLinking = value;
        }

        /// <summary>
        /// Linked Access Check On Target Resource
        /// </summary>
        [Input("linkedAccessCheckOnTargetResource")]
        public Input<bool>? LinkedAccessCheckOnTargetResource { get; set; }

        /// <summary>
        /// Prevent Data Exfiltration
        /// </summary>
        [Input("preventDataExfiltration")]
        public Input<bool>? PreventDataExfiltration { get; set; }

        public ManagedVirtualNetworkSettingsArgs()
        {
        }
    }
}
