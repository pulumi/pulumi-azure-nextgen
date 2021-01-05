// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.V20200801.Outputs
{

    [OutputType]
    public sealed class ResourceReferenceResponse
    {
        /// <summary>
        /// The fully qualified resource Id.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private ResourceReferenceResponse(string id)
        {
            Id = id;
        }
    }
}