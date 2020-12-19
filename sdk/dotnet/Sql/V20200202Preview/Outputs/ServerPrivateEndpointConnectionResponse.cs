// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview.Outputs
{

    [OutputType]
    public sealed class ServerPrivateEndpointConnectionResponse
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Private endpoint connection properties
        /// </summary>
        public readonly Outputs.PrivateEndpointConnectionPropertiesResponse Properties;

        [OutputConstructor]
        private ServerPrivateEndpointConnectionResponse(
            string id,

            Outputs.PrivateEndpointConnectionPropertiesResponse properties)
        {
            Id = id;
            Properties = properties;
        }
    }
}
