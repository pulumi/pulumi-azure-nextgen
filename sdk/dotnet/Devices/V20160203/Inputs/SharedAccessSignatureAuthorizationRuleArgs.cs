// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20160203.Inputs
{

    /// <summary>
    /// The properties of an IoT hub shared access policy.
    /// </summary>
    public sealed class SharedAccessSignatureAuthorizationRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the shared access policy.
        /// </summary>
        [Input("keyName", required: true)]
        public Input<string> KeyName { get; set; } = null!;

        /// <summary>
        /// The primary key.
        /// </summary>
        [Input("primaryKey")]
        public Input<string>? PrimaryKey { get; set; }

        /// <summary>
        /// The permissions assigned to the shared access policy.
        /// </summary>
        [Input("rights", required: true)]
        public Input<Pulumi.AzureNextGen.Devices.V20160203.AccessRights> Rights { get; set; } = null!;

        /// <summary>
        /// The secondary key.
        /// </summary>
        [Input("secondaryKey")]
        public Input<string>? SecondaryKey { get; set; }

        public SharedAccessSignatureAuthorizationRuleArgs()
        {
        }
    }
}
