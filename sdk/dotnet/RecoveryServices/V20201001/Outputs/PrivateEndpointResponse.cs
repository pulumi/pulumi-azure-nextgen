// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Outputs
{

    [OutputType]
    public sealed class PrivateEndpointResponse
    {
        /// <summary>
        /// Gets or sets id
        /// </summary>
        public readonly string? Id;

        [OutputConstructor]
        private PrivateEndpointResponse(string? id)
        {
            Id = id;
        }
    }
}
