// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview.Outputs
{

    [OutputType]
    public sealed class InstanceFailoverGroupReadWriteEndpointResponse
    {
        /// <summary>
        /// Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
        /// </summary>
        public readonly string FailoverPolicy;
        /// <summary>
        /// Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
        /// </summary>
        public readonly int? FailoverWithDataLossGracePeriodMinutes;

        [OutputConstructor]
        private InstanceFailoverGroupReadWriteEndpointResponse(
            string failoverPolicy,

            int? failoverWithDataLossGracePeriodMinutes)
        {
            FailoverPolicy = failoverPolicy;
            FailoverWithDataLossGracePeriodMinutes = failoverWithDataLossGracePeriodMinutes;
        }
    }
}
