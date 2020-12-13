// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20190301Preview.Inputs
{

    /// <summary>
    /// Describes the policy to be used for placement of a Service Fabric service.
    /// </summary>
    public sealed class ServicePlacementPolicyDescriptionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The type of placement policy for a service fabric service. Following are the possible values.
        /// </summary>
        [Input("type", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ServiceFabric.V20190301Preview.ServicePlacementPolicyType> Type { get; set; } = null!;

        public ServicePlacementPolicyDescriptionArgs()
        {
        }
    }
}
