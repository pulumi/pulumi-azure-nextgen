// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Peering.V20200101Preview.Inputs
{

    /// <summary>
    /// The contact detail class.
    /// </summary>
    public sealed class ContactDetailArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The e-mail address of the contact.
        /// </summary>
        [Input("email")]
        public Input<string>? Email { get; set; }

        /// <summary>
        /// The phone number of the contact.
        /// </summary>
        [Input("phone")]
        public Input<string>? Phone { get; set; }

        /// <summary>
        /// The role of the contact.
        /// </summary>
        [Input("role")]
        public InputUnion<string, Pulumi.AzureNextGen.Peering.V20200101Preview.Role>? Role { get; set; }

        public ContactDetailArgs()
        {
        }
    }
}
