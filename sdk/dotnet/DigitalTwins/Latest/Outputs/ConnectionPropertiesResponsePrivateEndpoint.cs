// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DigitalTwins.Latest.Outputs
{

    [OutputType]
    public sealed class ConnectionPropertiesResponsePrivateEndpoint
    {
        /// <summary>
        /// The resource identifier.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private ConnectionPropertiesResponsePrivateEndpoint(string id)
        {
            Id = id;
        }
    }
}