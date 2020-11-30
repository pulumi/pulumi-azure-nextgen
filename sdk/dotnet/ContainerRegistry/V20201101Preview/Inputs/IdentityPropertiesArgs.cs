// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview.Inputs
{

    /// <summary>
    /// Managed identity for the resource.
    /// </summary>
    public sealed class IdentityPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The principal ID of resource identity.
        /// </summary>
        [Input("principalId")]
        public Input<string>? PrincipalId { get; set; }

        /// <summary>
        /// The tenant ID of resource.
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        /// <summary>
        /// The identity type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        [Input("userAssignedIdentities")]
        private InputMap<Inputs.UserIdentityPropertiesArgs>? _userAssignedIdentities;

        /// <summary>
        /// The list of user identities associated with the resource. The user identity 
        /// dictionary key references will be ARM resource ids in the form: 
        /// '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
        ///     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
        /// </summary>
        public InputMap<Inputs.UserIdentityPropertiesArgs> UserAssignedIdentities
        {
            get => _userAssignedIdentities ?? (_userAssignedIdentities = new InputMap<Inputs.UserIdentityPropertiesArgs>());
            set => _userAssignedIdentities = value;
        }

        public IdentityPropertiesArgs()
        {
        }
    }
}
