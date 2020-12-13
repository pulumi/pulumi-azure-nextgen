// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearningServices.V20200515Preview.Inputs
{

    /// <summary>
    /// Identity for the resource.
    /// </summary>
    public sealed class IdentityArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The identity type.
        /// </summary>
        [Input("type")]
        public Input<Pulumi.AzureNextGen.MachineLearningServices.V20200515Preview.ResourceIdentityType>? Type { get; set; }

        [Input("userAssignedIdentities")]
        private InputMap<object>? _userAssignedIdentities;

        /// <summary>
        /// The user assigned identities associated with the resource.
        /// </summary>
        public InputMap<object> UserAssignedIdentities
        {
            get => _userAssignedIdentities ?? (_userAssignedIdentities = new InputMap<object>());
            set => _userAssignedIdentities = value;
        }

        public IdentityArgs()
        {
        }
    }
}
