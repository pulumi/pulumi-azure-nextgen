// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceBus.V20180101Preview.Outputs
{

    [OutputType]
    public sealed class SubnetResponse
    {
        /// <summary>
        /// Resource ID of Virtual Network Subnet
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private SubnetResponse(string id)
        {
            Id = id;
        }
    }
}
