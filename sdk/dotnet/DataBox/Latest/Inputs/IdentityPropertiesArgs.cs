// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.Latest.Inputs
{

    /// <summary>
    /// Managed identity properties.
    /// </summary>
    public sealed class IdentityPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Managed service identity type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// User assigned identity properties.
        /// </summary>
        [Input("userAssigned")]
        public Input<Inputs.UserAssignedPropertiesArgs>? UserAssigned { get; set; }

        public IdentityPropertiesArgs()
        {
        }
    }
}
